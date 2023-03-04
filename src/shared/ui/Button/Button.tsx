import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Button.module.scss'


import type { Mods } from 'shared/lib/classNames/classNames'


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
    className?: string
    theme?: BUTTON_THEME
    square?: boolean
    size?: BUTTON_SIZE
    children: React.ReactNode
}

export const Button = React.memo((props: Props) => {

    const { children } = props

    const {
        className = '',
        theme = BUTTON_THEME.OUTLINE,
        square = false,
        disabled = false,
        size = BUTTON_SIZE.M,
        ...otherProps
    } = props
    
    const mods = React.useMemo<Mods>(() => {
        return {
            [cls.square]: square,
            [cls.disabled]: disabled
        }
    }, [disabled, square])


    return (
        <button
            disabled={disabled}
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
})
