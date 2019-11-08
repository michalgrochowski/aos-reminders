import React, { useState, useEffect, useCallback } from 'react'
import { useSubscription } from './useSubscription'
import LightTheme from 'theme/light'
import DarkTheme from 'theme/dark'
import { SubscriptionApi } from 'api/subscriptionApi'
import { logEvent } from 'utils/analytics'
import { LocalTheme } from 'utils/localStore'
import { ITheme, TThemeType } from 'types/theme'

interface IThemeProvider {
  isDark: boolean
  isLight: boolean
  setDarkTheme: () => void
  setLightTheme: () => void
  theme: ITheme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<IThemeProvider | void>(undefined)

const ThemeProvider: React.FC = ({ children }) => {
  const { subscription, setSubscription } = useSubscription()
  const [theme, setTheme] = useState(LocalTheme.get() === 'dark' ? DarkTheme : LightTheme)
  const [isDark, setIsDark] = useState(LocalTheme.get() === 'dark')

  const updateTheme = useCallback(
    async (theme: TThemeType) => {
      try {
        setSubscription(s => ({ ...s, theme }))
        LocalTheme.set(theme) // Update local value
        const { id, userName } = subscription
        await SubscriptionApi.updateTheme({ id, userName, theme })
      } catch (err) {
        console.error(err)
      }
    },
    [subscription, setSubscription]
  )

  const setThemeFromValue = useCallback((val: TThemeType | null) => {
    return val === 'dark' ? setDarkTheme() : setLightTheme()
  }, [])

  const toggleTheme = useCallback(() => {
    const theme = isDark ? 'light' : 'dark'
    updateTheme(theme)
    logEvent(`SetTheme-${theme}`)
  }, [isDark, updateTheme])

  const setLightTheme = () => {
    setTheme(LightTheme)
    setIsDark(false)
  }
  const setDarkTheme = () => {
    setTheme(DarkTheme)
    setIsDark(true)
  }

  // Fetch our theme from the subscription API
  useEffect(() => {
    if (subscription && subscription.theme) {
      LocalTheme.set(subscription.theme) // Update local value
      setThemeFromValue(subscription.theme)
    }
  }, [subscription, setThemeFromValue])

  // Assign our theme's bgColor to the root element
  useEffect(() => {
    const element = document.getElementById('root')
    if (element) element.className = theme.bgColor
  }, [theme.bgColor])

  // Fetch our theme from the local store
  useEffect(() => {
    const theme = LocalTheme.get()
    setThemeFromValue(theme)
  })

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        isLight: !isDark,
        setDarkTheme,
        setLightTheme,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }