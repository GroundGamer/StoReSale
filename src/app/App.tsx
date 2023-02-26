import React from 'react'

import { useDispatch } from 'react-redux'

import { AppRouter } from 'app/providers'

import { Navbar, PageLoader, Sidebar } from 'widgets'

import { userActions } from 'entities/User'

import { classNames } from 'shared/lib'



export const App = () => {


    const dispatch = useDispatch()


    React.useEffect(() => {
        dispatch(userActions.initialAuthData())
    }, [dispatch])




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
