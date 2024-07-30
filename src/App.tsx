import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Page from './page'
import sakura from '../src/image/sakura.jpg'
import { Header } from './component/header'
import { Grow } from '@mui/material'

function App() {
  const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  const [tabIndex, setTabIndex] = useState<number>(0)
  // const getTabIndex = (search: string | null) => {
  //   if (search == 'profile') {
  //     return 0
  //   }
  //   if (search == 'skill') {
  //     return 1
  //   }
  //   if (search == 'work') {
  //     return 2
  //   }
  //   if (search == 'resume') {
  //     return 3
  //   }
  //   return 0
  // }
  const handleValueChange = (value: number) => {
    console.log(value)
    setTabIndex(value)
  }
  // Parse the URL to get query parameters
  // const urlParams = new URLSearchParams(window.location.search)

  // Access specific query parameters
  // const search = urlParams.get('search')
  // console.log(search)
  return (
    <div className="App">
      <header>
        <Header onValueChange={handleValueChange} />
      </header>
      <body>
        <div className="img-container">
          <img src={sakura} className="sakura" alt="sakura" />

          <Grow in={showHello} timeout={1000} unmountOnExit>
            <div className="text-overlay">H e l l o !</div>
          </Grow>
        </div>
        <p>color</p>
        <Page tabIndex={tabIndex} />
      </body>
    </div>
  )
}

export default App
