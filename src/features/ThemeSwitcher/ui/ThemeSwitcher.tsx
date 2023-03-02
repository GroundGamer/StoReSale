import React from 'react'

import { DarkIcon, LightIcon } from 'shared/assets'

import { classNames, THEME, useTheme } from 'shared/lib'

import { Button, BUTTON_THEME } from 'shared/ui'


interface Props {
    className?: string
}

export const ThemeSwitcher = React.memo((props: Props) => {

    const { theme, toggleTheme } = useTheme()

    const { className = '' } = props



    return (
        <Button
            onClick={toggleTheme}
            theme={BUTTON_THEME.CLEAR}
            className={classNames('', {}, [className])}
        >
            {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})
