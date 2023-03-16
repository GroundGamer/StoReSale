import React from 'react'

import { useSelector } from 'react-redux'

import { AppRouter } from 'app/providers'

import { Navbar, PageLoader, Sidebar } from 'widgets'

import { userActions, getUserMounted } from 'entities/User'

import { classNames } from 'shared/lib'

import { useAppDispatch } from 'shared/lib'


export const App = () => {

    const mountedUserData = useSelector(getUserMounted)

    const dispatch = useAppDispatch()


    React.useEffect(() => {
        dispatch(userActions.initialAuthData())
    }, [dispatch])




    return (
        <div className={classNames('app', {}, [])}>

            <React.Suspense fallback={<PageLoader />}>
                <Navbar />

                <div className={classNames('content-page')}>
                    <Sidebar />

                    {mountedUserData && (<AppRouter />)}
                </div>
            </React.Suspense>

        </div>
    )
}
