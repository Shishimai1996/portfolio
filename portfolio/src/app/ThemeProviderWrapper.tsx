import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import React, { createContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { themeEn, themeJa } from './theme'

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
