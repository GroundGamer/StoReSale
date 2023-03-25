import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Icon.module.scss'


interface Props {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    className?: string
}

export const Icon = React.memo((props: Props) => {

    const { className = '' } = props

    const { Svg } = props


    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    )
})
