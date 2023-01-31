import React from 'react'

import { Route, Link, Routes } from 'react-router-dom'


import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'

import { classNames } from './helpers/classNames'

import { useTheme } from './theme/useTheme'


import './styles/index.scss'


const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>

            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy />}/>
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                </Routes>
            </React.Suspense>
        </div>
    )
}

export default App
