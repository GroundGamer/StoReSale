import React from 'react'

import { useSelector } from 'react-redux'

import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'widgets'

import { getUserAuthData } from 'entities/User'

import { routeConfig } from '../config/routeConfig'


export const AppRouter = React.memo(() => {
    const isAuth = useSelector(getUserAuthData)

    const routes = React.useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            return !(route.authOnly && !isAuth)
        })
    }, [isAuth])



    return (
        <Routes>
            {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <React.Suspense fallback={<PageLoader />}>
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        </React.Suspense>
                    )}
                />
            ))}
        </Routes>
    )
})