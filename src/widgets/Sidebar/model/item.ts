import React from 'react'

import { AboutPageIcon, MainPageIcon, ProfileIcon, ArticleIcon } from 'shared/assets'

import { RoutePath } from 'shared/config'


export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const sidebarItemsList: Array<SidebarItemType> = [
    {
        path: RoutePath.main,
        Icon: MainPageIcon,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        Icon: AboutPageIcon,
        text: 'О сайте'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true
    }
]