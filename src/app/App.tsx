import React from 'react'

import { Link } from 'react-router-dom'

import { AppRouter } from 'app/providers'

import { classNames, useTheme } from 'shared'

import './styles/index.scss'


export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>

            <AppRouter />
        </div>
    )
}
