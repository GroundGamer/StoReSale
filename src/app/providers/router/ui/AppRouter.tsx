import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { routeConfig } from 'shared/config'


export const AppRouter = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </React.Suspense>
    )
}
