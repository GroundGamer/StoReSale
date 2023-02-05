import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Button.module.scss'


export enum THEME_BUTTON {
    CLEAR = 'clear'
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: THEME_BUTTON
}

export const Button: React.FC<Props> = (props) => {

    const { children } = props

    const {
        className = '',
        theme = THEME_BUTTON.CLEAR,
        ...otherProps
    } = props


    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
