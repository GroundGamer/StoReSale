import React from 'react'

import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from 'shared/lib'


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState<THEME>(defaultTheme)

    const defaultProps = React.useMemo(() => ({ theme, setTheme }), [theme])



    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
