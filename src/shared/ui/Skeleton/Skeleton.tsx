import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Skeleton.module.scss'


interface Props {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = React.memo((props: Props) => {

    const { className = '' } = props

    const { height, width, border } = props

    const style: React.CSSProperties = {
        height,
        width,
        borderRadius: border
    }


    return (
        <div
            className={classNames(cls.skeleton, {}, [className])}
            style={style}
        />
    )
})
