import React, { createContext, useContext, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { themeEn, themeJa } from './theme'
import { useTranslation } from 'react-i18next'

const ThemeContext = createContext(null)

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation()
  const theme = useMemo(
    () => (i18n.language === 'ja' ? themeJa : themeEn),
    [i18n.language]
  )

  return (
    <ThemeContext.Provider value={null}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
