import React from 'react'

import { AppRouter } from 'app/providers'

import { Navbar } from 'widgets'

import { classNames, useTheme } from 'shared/lib'


import './styles/index.scss'


export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />

            <AppRouter />

            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
}
