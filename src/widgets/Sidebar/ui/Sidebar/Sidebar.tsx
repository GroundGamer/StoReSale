import React from 'react'

import { useTranslation } from 'react-i18next'

import { LangSwitcher, ThemeSwitcher } from 'features'

import { AboutPageIcon, MainPageIcon } from 'shared/assets'

import { RoutePath } from 'shared/config'

import { classNames } from 'shared/lib'

import { AppLink, APP_LINK_THEME } from 'shared/ui'
import { Button, BUTTON_THEME, BUTTON_SIZE } from 'shared/ui'

import cls from './Sidebar.module.scss'


interface Props {
    className?: string
}

export const Sidebar: React.FC<Props> = (props) => {

    const { className = '' } = props


    const { t } = useTranslation()


    const [collapsed, setCollapsed] = React.useState<boolean>(false)


    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }


    return (
        <div data-testid={'sidebar'} className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                square
                size={BUTTON_SIZE.L}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                className={cls.collapsedBtn}
                onClick={onToggle}
                data-testid={'sidebar-toggle'}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={APP_LINK_THEME.SECONDARY}
                    className={classNames(cls.item)}
                >
                    <MainPageIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={APP_LINK_THEME.SECONDARY}
                    className={classNames(cls.item)}
                >
                    <AboutPageIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>

            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    )
}
