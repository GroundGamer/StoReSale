import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Text.module.scss'


export enum TEXT_THEME {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TEXT_ALIGN {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

interface Props {
    className?: string
    title?: string
    text?: string
    theme?: TEXT_THEME
    align?: TEXT_ALIGN
}

export const Text = React.memo((props: Props) => {

    const {
        className = '',
        theme = TEXT_THEME.PRIMARY,
        align = TEXT_ALIGN.LEFT
    } = props

    const {
        title = '',
        text = ''
    } = props


    return (
        <div className={classNames(cls.text, {}, [
            className,
            cls[theme],
            cls[align]
        ])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.paragraph}>{text}</p>}
        </div>
    )
})
