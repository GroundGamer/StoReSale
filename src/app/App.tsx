import React from 'react'

import { Route, Link, Routes } from 'react-router-dom'

import { MainPage, AboutPage } from 'pages'

import { classNames, useTheme } from 'shared'

import './styles/index.scss'


export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>

            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />}/>
                    <Route path={'/about'} element={<AboutPage />}/>
                </Routes>
            </React.Suspense>
        </div>
    )
}
