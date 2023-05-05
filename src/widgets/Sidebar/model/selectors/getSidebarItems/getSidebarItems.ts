import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from 'entities/User'

import {
    AboutPageIcon,
    ArticleIcon,
    MainPageIcon,
    ProfileIcon
} from 'shared/assets'

import { RoutePath } from 'shared/config'


import type { SidebarItemType } from '../../types/Sidebar'


export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: Array<SidebarItemType> = [
            {
                path: RoutePath.main,
                Icon: MainPageIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutPageIcon,
                text: 'О сайте'
            }

        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            )
        }

        return sidebarItemsList
    }
)