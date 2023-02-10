import React from 'react'

import { classNames } from 'shared/lib'

import { Loader } from 'shared/ui'


import cls from './PageLoader.module.scss'


interface Props {
    className?: string
}

export const PageLoader: React.FC<Props> = (props) => {

    const { className = '' } = props


    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
