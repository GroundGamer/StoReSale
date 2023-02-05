import React from 'react'

import { ThemeChooser } from 'widgets'

import { AppLink } from 'shared/ui'

import { APP_LINK_THEME } from 'shared/ui'

import { classNames } from 'shared/lib'

import cls from './Navbar.module.scss'


interface Props {
    className?: string
}

export const Navbar: React.FC<Props> = (props) => {

    const { className = '' } = props


    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <ThemeChooser />

            <div className={classNames(cls.links)}>
                <AppLink
                    to={'/'}
                    theme={APP_LINK_THEME.SECONDARY}
                    className={classNames(cls.mainLink)}
                >
                    Main page
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={APP_LINK_THEME.SECONDARY}
                >
                    About page
                </AppLink>
            </div>
        </div>
    )
}
