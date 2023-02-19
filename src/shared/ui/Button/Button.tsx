import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Button.module.scss'


export enum BUTTON_THEME {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum BUTTON_SIZE {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: BUTTON_THEME,
    square?: boolean,
    size?: BUTTON_SIZE
}

export const Button: React.FC<Props> = (props) => {

    const { children } = props

    const {
        className = '',
        theme = '',
        square = false,
        size = BUTTON_SIZE.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square
    }


    return (
        <button
            className={classNames(
                cls.button,
                mods,
                [
                    className,
                    cls[theme],
                    cls[size]
                ]
            )}
            {...otherProps}
        >
            {children}
        </button>
    )
}
