import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Page from './page'
import sakura from '../src/image/sakura.jpg'
import { Header } from './component/header'
import { Box, Grow } from '@mui/material'

function App() {
  const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  const [tabIndex, setTabIndex] = useState<number>(0)

  const handleValueChange = (value: number) => {
    console.log(value)
    setTabIndex(value)
  }

  return (
    <div className="App">
      <header>
        <Header onValueChange={handleValueChange} />
      </header>
      <body>
        <div className="img-container">
          <img src={sakura} className="sakura" alt="sakura" />

          <Grow in={showHello} timeout={1000} unmountOnExit>
            <Box className="text-overlay">
              <h2>H e l l o !</h2>
            </Box>
          </Grow>
        </div>
        <Page tabIndex={tabIndex} />
      </body>
    </div>
  )
}

export default App
