import React from 'react'

import { useTranslation } from 'react-i18next'

import { AppLink } from 'shared/ui'

import { APP_LINK_THEME } from 'shared/ui'

import { classNames } from 'shared/lib'

import cls from './Navbar.module.scss'


interface Props {
    className?: string
}

export const Navbar: React.FC<Props> = (props) => {

    const { className = '' } = props

    const { t } = useTranslation()


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink
                    to={'/'}
                    theme={APP_LINK_THEME.SECONDARY}
                    className={classNames(cls.mainLink)}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={APP_LINK_THEME.SECONDARY}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    )
}
