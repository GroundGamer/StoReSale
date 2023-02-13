import React from 'react'

import { AppRouter } from 'app/providers'

import { Navbar, Sidebar } from 'widgets'

import { classNames, useTheme } from 'shared/lib'


import './styles/index.scss'


export const App = () => {
    const { theme } = useTheme()



    return (
        <div className={classNames('app', {}, [theme])}>

            <React.Suspense fallback={''}>
                <Navbar />

                <div className={classNames('content-page')}>
                    <Sidebar />

                    <AppRouter />
                </div>
            </React.Suspense>

        </div>
    )
}
