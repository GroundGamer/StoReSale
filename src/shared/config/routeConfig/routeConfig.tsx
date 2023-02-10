import { AboutPage, MainPage, NotFoundPage } from 'pages'


import type { RouteProps } from 'react-router-dom'


export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
    [APP_ROUTES.NOT_FOUND]: '*'
}

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
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
]