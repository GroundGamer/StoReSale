import React from 'react'

import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from 'shared/lib'


interface UseThemeResult {
    theme: THEME,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    const toggleTheme = () => {
        let formedTheme: THEME

        switch (theme) {
            case THEME.DARK:
                formedTheme = THEME.LIGHT

                break

            case THEME.LIGHT:
                formedTheme = THEME.ORANGE

                break

            case THEME.ORANGE:
                formedTheme = THEME.DARK

                break

            default:
                formedTheme = THEME.LIGHT
        }

        setTheme?.(formedTheme)
        document.body.className = formedTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, formedTheme)
    }

    return {
        theme: theme || THEME.LIGHT,
        toggleTheme
    }
}