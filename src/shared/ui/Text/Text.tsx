import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Text.module.scss'


export enum TEXT_THEME {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface Props {
    className?: string
    title?: string
    text?: string
    theme?: TEXT_THEME
}

export const Text: React.FC<Props> = (props) => {

    const { className = '', theme = TEXT_THEME.PRIMARY } = props

    const {
        title = '',
        text = ''
    } = props


    return (
        <div className={classNames(cls.text, {}, [className,cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.paragraph}>{text}</p>}
        </div>
    )
}
