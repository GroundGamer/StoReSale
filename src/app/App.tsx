import React from 'react'

import { AppRouter } from 'app/providers'

import { Navbar, PageLoader, Sidebar } from 'widgets'

import { classNames } from 'shared/lib'



export const App = () => {
    return (
        <div className={classNames('app', {}, [])}>

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
