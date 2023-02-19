import React from 'react'

import { classNames } from 'shared/lib'

import cls from './Navbar.module.scss'


interface Props {
    className?: string
}

export const Navbar: React.FC<Props> = (props) => {

    const { className = '' } = props


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <span/>
            </div>
        </div>
    )
}
