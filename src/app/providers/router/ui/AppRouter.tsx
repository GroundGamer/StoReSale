import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { routeConfig } from 'shared/config'

import { classNames } from 'shared/lib'


export const AppRouter = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
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
