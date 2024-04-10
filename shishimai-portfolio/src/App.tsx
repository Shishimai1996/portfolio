import React, { useEffect, useState, FC } from 'react'
import './App.css'
import Page from './page'
import sakura from './sakura.jpg'
import Header from './component/header'
import { Grow } from '@mui/material'

import Three from './component/three'

function App() {
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
        <Three />
        <h1>Welcome to shishimai portfolio!</h1>
        <Page />
      </body>
    </div>
  )
}

export default App
