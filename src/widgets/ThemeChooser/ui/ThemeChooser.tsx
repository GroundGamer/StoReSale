import React from 'react'

import { DarkIcon, LightIcon } from 'shared/assets'

import { classNames, THEME, useTheme } from 'shared/lib'

import { Button } from 'shared/ui'


import cls from './ThemeChooser.module.scss'


interface Props {
    className?: string
}

export const ThemeChooser: React.FC<Props> = (props) => {

    const { theme, toggleTheme } = useTheme()

    const { className = '' } = props



    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeChooser, {}, [className])}
        >
            {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
