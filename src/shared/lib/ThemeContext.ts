import React from 'react'

export enum THEME {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme'
}


export interface ThemeContextProps {
    theme?: THEME,
    setTheme?: (theme: THEME) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({

})

export const LOCAL_STORAGE_THEME_KEY = 'theme'