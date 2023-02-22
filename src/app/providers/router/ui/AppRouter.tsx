import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'widgets'

import { classNames } from 'shared/lib'

import { routeConfig } from '../config/routeConfig'


export const AppRouter = () => {
    return (
        <React.Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={(
                            <div className={classNames('page-wrapper')}>
                                {route.element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </React.Suspense>
    )
}
