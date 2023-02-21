import React from 'react'

import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from 'shared/lib'


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT


interface ThemeProviderProps {
    children: React.ReactNode
    initialTheme?: THEME
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {

    const { children } = props

    const { initialTheme } = props

    const [theme, setTheme] = React.useState<THEME>(initialTheme || defaultTheme)

    const defaultProps = React.useMemo(() => ({ theme, setTheme }), [theme])



    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
