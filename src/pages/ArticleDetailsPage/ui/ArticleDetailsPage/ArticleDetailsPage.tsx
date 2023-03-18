import React from 'react'

import { classNames } from 'shared/lib'


import cls from './ArticleDetailsPage.module.scss'


interface Props {
    className?: string
}

const ArticleDetailsPage: React.FC<Props> = (props) => {

    const { className = '' } = props


    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            Article details page
        </div>
    )
}

export default ArticleDetailsPage