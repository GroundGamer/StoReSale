import React from 'react'

import { useTranslation } from 'react-i18next'

import { useParams } from 'react-router-dom'

import { ArticleDetails } from 'entities/Article'


interface Props {
    className?: string
}

const ArticleDetailsPage: React.FC<Props> = (props) => {

    const { id } = useParams<{ id: string }>()


    const { t } = useTranslation('articles')


    const { className = '' } = props


    if (!id) {
        return (
            <div className={className}>
                {t('Статья не найдена')}
            </div>
        )
    }


    return (
        <div className={className}>
            <ArticleDetails articleId={id} />
        </div>
    )
}

export default ArticleDetailsPage