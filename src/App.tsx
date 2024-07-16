import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Page from './page'
import sakura from '../src/image/sakura.jpg'
import Header from './component/header'
import { Grow } from '@mui/material'

function App() {
  const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
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
        </body>
      </div>
    </>
  )
}

export default App
