import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Page from './page'
import sakura from '../src/image/sakura.jpg'
import { Header } from './component/header'
import { Box, Grow, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import './i18n'
import { ThemeProviderWrapper } from './ThemeProviderWrapper'

function App() {
  const { t } = useTranslation()

  const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const [tabIndex, setTabIndex] = useState<number>(0)

  //get the page number from the page.tsx and set it to the page controller
  const handleValueChange = (value: number) => {
    setTabIndex(value)
  }

  return (
    <ThemeProviderWrapper>
      <div className="App">
        <header>
          <Header onValueChange={handleValueChange} />
        </header>
        <main>
          <div className="img-container">
            <img src={sakura} className="sakura" alt="sakura" />

            <Grow in={showHello} timeout={1000} unmountOnExit>
              <Box className="text-overlay">
                <Typography variant="h1">{t('hello')}</Typography>
              </Box>
            </Grow>
          </div>
          <Page tabIndex={tabIndex} />
        </main>
      </div>
    </ThemeProviderWrapper>
  )
}

export default App
