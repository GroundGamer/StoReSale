import {
    AboutPage,
    MainPage,
    ProfilePage,
    NotFoundPage
} from 'pages'

import { RoutePath } from 'shared/config'

import type { RouteProps } from 'react-router-dom'


export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    },
    {
        path: RoutePath.profile,
        element: <ProfilePage />
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
]