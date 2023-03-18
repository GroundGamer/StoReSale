import { RouteProps } from 'react-router-dom'

export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_found'
}


export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
    [APP_ROUTES.PROFILE]: '/profile',
    [APP_ROUTES.ARTICLES]: '/articles',
    [APP_ROUTES.ARTICLE_DETAILS]: '/articles/',
    [APP_ROUTES.NOT_FOUND]: '*'
}