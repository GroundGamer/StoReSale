import { AboutPage, MainPage } from 'pages'


import type { RouteProps } from 'react-router-dom'


export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about'
}

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    }
]