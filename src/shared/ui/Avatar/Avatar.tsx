import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Avatar.module.scss'


interface Props {
    className?: string
    src: string
    alt?: string
    size?: number
}

export const Avatar = React.memo((props: Props) => {

    const { className = '' } = props

    const {
        alt = '',
        src = '',
        size
    } = props

    const styles = React.useMemo<React.CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }, [size])


    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
            alt={alt}
        />
    )
})
