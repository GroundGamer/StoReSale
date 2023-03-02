import React from 'react'

import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib'


import type { LinkProps } from 'react-router-dom'


import cls from './AppLink.module.scss'


export enum APP_LINK_THEME {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface Props extends LinkProps {
    className?: string
    theme?: APP_LINK_THEME
    children: React.ReactNode
}

export const AppLink: React.FC<Props> = (props) => {

    const { to } = props

    const { className = '', theme = APP_LINK_THEME.PRIMARY } = props

    const { children, ...otherProps } = props


    return (
        <Link {...otherProps} to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}
