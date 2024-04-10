import * as THREE from 'three'
import { Physics, usePlane, useSphere } from '@react-three/cannon'

// import { datas } from '../../modules/store'
// import { Data } from '../../types/types'
import React, { FC, Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
// import { PostProcessing } from './postprocessing/PostProcessing'
// import { ScreenPlane } from './ScreenPlane';
// import { Simulator } from './Simulator';

import { Plane, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import fragmentShader from '../modules/glsl/'
import vertexShader from '../modules/glsl/raymarchingVert.glsl'
import { Effects } from '@react-three/drei'
import { FXAAShader } from 'three-stdlib'
import { Size } from '@react-three/fiber'
import { createRef } from 'react'

import { Pass, ShaderPass } from 'three-stdlib'

export default function Three() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 15],
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000,
      }}
      dpr={window.devicePixelRatio}
    >
      {/* <color attach="background" args={['#000']} /> */}
      <Suspense fallback={null}>
        <Simulator />
        <ScreenPlane />
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}

export type Data = {
  position: THREE.Vector3
  scale: number
}

export const AMOUNT = 20

export const datas: Data[] = [...Array(AMOUNT)].map(() => {
  const position = new THREE.Vector3(
    THREE.MathUtils.randFloat(-5, 5),
    THREE.MathUtils.randFloat(-5, 5),
    0
  )
  const scale = THREE.MathUtils.randFloat(0.5, 1.5)
  return { position, scale }
})

export const publicPath = (path: string) => {
  path.startsWith('/') && (path = path.substring(1))
  return import.meta.env.BASE_URL + path
}

export const Simulator: FC = () => {
  return (
    <Physics gravity={[0, 0, 0]} iterations={10} broadphase="SAP">
      {/* debug mode */}
      {/* <Debug color="#fff" scale={1.05}>
				<Collisions />
				{datas.map((data, i) => (
					<PhysicalSphere key={i} data={data} />
				))}
			</Debug> */}

      {/* product mode */}
      <Collisions />
      {datas.map((data, i) => (
        <PhysicalSphere key={i} data={data} />
      ))}
    </Physics>
  )
}

// ========================================================
const Collisions: FC = () => {
  // back
  usePlane(() => ({ position: [0, 0, -1], rotation: [0, 0, 0] }))
  // front
  usePlane(() => ({ position: [0, 0, 5], rotation: [0, -Math.PI, 0] }))
  // // bottom
  // usePlane(() => ({ position: [0, -4, 0], rotation: [-Math.PI / 2, 0, 0] }))
  // // top
  // usePlane(() => ({ position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }))

  const [, api] = useSphere(() => ({ type: 'Kinematic', args: [3] }))

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    api.position.set(x, y, 1.5)
  })

  return null
}

// ========================================================
const PhysicalSphere: FC<{ data: Data }> = ({ data }) => {
  const scale = data.scale

  const [ref, api] = useSphere(() => ({
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.95,
    fixedRotation: true,
    args: [scale],
    position: data.position.toArray(),
  }))

  useEffect(() => {
    const vec = new THREE.Vector3()
    const unsubscribe = api.position.subscribe((p) => {
      data.position.set(p[0], p[1], p[2])

      vec
        .set(p[0], p[1], p[2])
        .normalize()
        .multiplyScalar(-scale * 30)

      return api.applyForce(vec.toArray(), [0, 0, 0])
    })

    return () => {
      unsubscribe()
    }
  }, [api])

  return null
}

export const ScreenPlane: FC = () => {
  const { viewport } = useThree()

  const texture = useTexture(publicPath('/assets/images/wlop.jpg'))
  texture.encoding = THREE.sRGBEncoding
  texture.wrapS = THREE.MirroredRepeatWrapping
  texture.wrapT = THREE.MirroredRepeatWrapping

  // Calculate screen size and texture aspect ratio
  const textureAspect = texture.image.width / texture.image.height
  const aspect = viewport.aspect
  const ratio = aspect / textureAspect
  const [x, y] = aspect < textureAspect ? [ratio, 1] : [1, 1 / ratio]

  // Replace embedded text
  const fragment = fragmentShader.replaceAll('AMOUNT', AMOUNT.toString())

  const shader: THREE.Shader = {
    uniforms: {
      u_aspect: { value: viewport.aspect },
      u_datas: { value: datas },
      u_texture: { value: texture },
      u_uvScale: { value: new THREE.Vector2(x, y) },
    },
    vertexShader,
    fragmentShader: fragment,
  }

  useFrame(() => {
    datas.forEach((data, i) => {
      shader.uniforms.u_datas.value[i].position.copy(data.position)
    })
  })

  return (
    <Plane args={[1, 1]} scale={[viewport.width, viewport.height, 1]}>
      <shaderMaterial args={[shader]} />
    </Plane>
  )
}

export const PostProcessing: FC = () => {
  const fxaa = new FXAA()

  useFrame(({ size }) => {
    fxaa.update(size)
  })

  return (
    <Effects>
      <shaderPass ref={fxaa.ref} args={[fxaa.shader]} />
    </Effects>
  )
}

export abstract class BasePass<T extends Pass> {
  public ref

  constructor() {
    this.ref = createRef<T>()
  }

  protected abstract _initController: () => void
  abstract update: (...args: any) => void

  protected get pass() {
    return this.ref.current
  }

  protected validatedPass = (enabled = true) => {
    if (!this.pass) return null
    this.pass.enabled = enabled
    return enabled ? this.pass : null
  }
}

export abstract class BaseShader extends BasePass<ShaderPass> {
  public shader: THREE.Shader

  constructor(shader: THREE.Shader) {
    super()
    this.shader = shader
  }
}

export abstract class BaseCustomShader extends BaseShader {
  constructor(
    uniforms: { [uniform: string]: THREE.IUniform<any> },
    vertexShader: string,
    fragmentShader: string
  ) {
    const shader = {
      uniforms: THREE.UniformsUtils.merge([
        { tDiffuse: { value: null } },
        uniforms,
      ]),
      vertexShader,
      fragmentShader,
    }
    super(shader)
  }
}
export class FXAA extends BaseShader {
  constructor() {
    super(FXAAShader)
  }

  protected _initController = () => {}

  update = (size: Size) => {
    // validate pass
    const pass = this.validatedPass()
    if (!pass) return

    // update uniforms
    pass.uniforms.resolution.value.set(1 / size.width, 1 / size.height)
  }
}
