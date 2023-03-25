import React from 'react'

import { classNames } from 'shared/lib'


import cls from './ArticlesPage.module.scss'


interface Props {
    className?: string
}

const ArticlesPage: React.FC<Props> = (props) => {

    const { className = '' } = props


    return (
        <div className={classNames(cls.articlesPage, {}, [className])}/>
    )
}

export default ArticlesPage