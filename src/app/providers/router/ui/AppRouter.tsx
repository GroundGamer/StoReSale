import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { RequireAuth } from 'app/providers'

import { PageLoader } from 'widgets'

import { routeConfig } from '../config/routeConfig'


import type { AppRoutesProps } from 'shared/config/router'


export const AppRouter = React.memo(() => {
    const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {

        const element = (
            <React.Suspense fallback={<PageLoader />}>
                <div className={'page-wrapper'}>
                    {route.element}
                </div>
            </React.Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])


    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
})