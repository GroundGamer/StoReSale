import React from 'react'


import { LangSwitcher, ThemeSwitcher } from 'features'


import { classNames } from 'shared/lib'

import { Button, BUTTON_THEME, BUTTON_SIZE } from 'shared/ui'


import { sidebarItemsList } from '../../model/item'

import { SidebarItem } from '../../ui/SidebarItem/SidebarItem'


import cls from './Sidebar.module.scss'


interface Props {
    className?: string
}

export const Sidebar = React.memo((props: Props) => {

    const { className = '' } = props


    const [collapsed, setCollapsed] = React.useState<boolean>(false)


    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }


    return (
        <div data-testid={'sidebar'} className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                square
                size={BUTTON_SIZE.L}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                className={cls.collapsedBtn}
                onClick={onToggle}
                data-testid={'sidebar-toggle'}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>

                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}

            </div>

            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    )
})
