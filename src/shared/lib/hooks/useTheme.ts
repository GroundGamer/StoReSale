import React from 'react'

import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from 'shared/lib'


interface UseThemeResult {
    theme: THEME,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    const toggleTheme = () => {
        const formedTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK

        setTheme(formedTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, formedTheme)
    }

    return {
        theme,
        toggleTheme
    }
}