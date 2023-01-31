import React from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'


interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    const toggleTheme = () => {
        const formedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

        setTheme(formedTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, formedTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}