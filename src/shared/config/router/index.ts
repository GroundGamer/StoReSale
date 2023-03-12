import { RouteProps } from 'react-router-dom'

export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}


export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
    [APP_ROUTES.PROFILE]: '/profile',
    [APP_ROUTES.NOT_FOUND]: '*'
}