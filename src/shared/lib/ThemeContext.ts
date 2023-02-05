import React from 'react'

export enum THEME {
    LIGHT = 'light',
    DARK = 'dark'
}


export interface ThemeContextProps {
    theme?: THEME,
    setTheme?: (theme: THEME) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({

})

export const LOCAL_STORAGE_THEME_KEY = 'theme'