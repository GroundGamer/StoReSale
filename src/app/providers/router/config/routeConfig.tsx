import {
    AboutPage,
    MainPage,
    ProfilePage,
    NotFoundPage,
    ArticlesPage,
    ArticleDetailsPage
} from 'pages'

import { APP_ROUTES, RoutePath } from 'shared/config'

import { AppRoutesProps } from 'shared/config/router'



export const routeConfig: Record<APP_ROUTES, AppRoutesProps> = {
    [APP_ROUTES.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [APP_ROUTES.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [APP_ROUTES.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [APP_ROUTES.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true
    },
    [APP_ROUTES.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    [APP_ROUTES.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}