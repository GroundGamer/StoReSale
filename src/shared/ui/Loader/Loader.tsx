import React from 'react'

import { classNames } from 'shared/lib'


import './Loader.scss'


interface Props {
    className?: string
}

export const Loader: React.FC<Props> = (props) => {

    const { className = '' } = props


    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
