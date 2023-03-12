import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { APP_LINK_THEME, AppLink } from 'shared/ui'


import cls from './SidebarItem.module.scss'


import type { SidebarItemType } from 'widgets/Sidebar/model/item'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'


interface Props {
    item: SidebarItemType
    collapsed: boolean,
    authOnly?: boolean
}

export const SidebarItem = React.memo((props: Props) => {

    const { t } = useTranslation()

    const isAuth = useSelector(getUserAuthData)


    const { item } = props

    const {
        path,
        text,
        Icon
    } = item


    const { collapsed } = props


    if (item.authOnly && !isAuth) {
        return null
    }


    return (
        <AppLink
            to={path}
            theme={APP_LINK_THEME.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <Icon className={cls.icon} />

            <span className={cls.link}>
                {t(text)}
            </span>
        </AppLink>
    )
})
