import React from 'react'

import { AppRouter } from 'app/providers'

import { Navbar, PageLoader, Sidebar } from 'widgets'

import { classNames, useTheme } from 'shared/lib'



export const App = () => {
    const { theme } = useTheme()



    return (
        <div className={classNames('app', {}, [theme])}>

            <React.Suspense fallback={<PageLoader />}>
                <Navbar />

                <div className={classNames('content-page')}>
                    <Sidebar />

                    <AppRouter />
                </div>
            </React.Suspense>

        </div>
    )
}
