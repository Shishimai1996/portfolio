import React, { useEffect, useState, FC } from 'react'
import './App.css'
import Page from './page'
import sakura from './sakura.jpg'
import Header from './component/header'
import { Collapse, Grow } from '@mui/material'
import * as THREE from 'three'
import { Physics, usePlane, useSphere } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { datas } from '../../modules/store'
import { Data } from '../../types/types'

export default function App() {
  const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    // ページが読み込まれた後、一定時間後にHello!を表示する
    const timer = setTimeout(() => {
      setShowHello(true)
    }, 1000) // 例: 1秒後に表示

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <div className="img-container">
          <img src={sakura} className="sakura" alt="sakura" />

          <Grow in={showHello} timeout={1000} unmountOnExit>
            <div className="text-overlay">H e l l o !</div>
          </Grow>
        </div>

        <h1>Welcome to shishimai portfolio!</h1>
        <Page />
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
      </body>
    </div>
  )
}

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
