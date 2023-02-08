import React from 'react'

import { DarkIcon, LightIcon } from 'shared/assets'

import { classNames, THEME, useTheme } from 'shared/lib'

import { Button } from 'shared/ui'


interface Props {
    className?: string
}

export const ThemeSwitcher: React.FC<Props> = (props) => {

    const { theme, toggleTheme } = useTheme()

    const { className = '' } = props



    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
