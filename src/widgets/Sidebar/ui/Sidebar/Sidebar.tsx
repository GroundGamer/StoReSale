import React from 'react'

import { LangSwitcher, ThemeSwitcher } from 'features'

import { classNames } from 'shared/lib'

import { Button } from 'shared/ui'

import cls from './Sidebar.module.scss'


interface Props {
    className?: string
}

export const Sidebar: React.FC<Props> = (props) => {

    const { className = '' } = props


    const [collapsed, setCollapsed] = React.useState<boolean>(false)


    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }


    return (
        <div data-testid={'sidebar'} className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid={'sidebar-toggle'}
                onClick={onToggle}
            >
                Toggle
            </Button>

            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                />
            </div>
        </div>
    )
}
