import React from 'react'

import { LangSwitcher, ThemeSwitcher } from 'features'

import { classNames } from 'shared/lib'

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
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>

            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                />
            </div>
        </div>
    )
}
