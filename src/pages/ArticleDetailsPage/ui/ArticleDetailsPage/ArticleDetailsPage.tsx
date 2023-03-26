import React from 'react'

import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { useParams } from 'react-router-dom'

import {
    articleCommentsReducer,
    fetchCommentsByArticleId,
    getArticleComments,
    getArticleCommentsIsLoading
} from 'features/ArticleCommentList'

import { ArticleDetails } from 'entities/Article'

import { CommentList } from 'entities/Comment'

import { classNames, DynamicModuleLoader, useAppDispatch, useInitialEffect } from 'shared/lib'

import { Text } from 'shared/ui'


import cls from './ArticleDetailsPage.module.scss'


import type { ReducersList } from 'shared/lib'



interface Props {
    className?: string
}

const reducers: ReducersList = {
    articleComments: articleCommentsReducer
}

const ArticleDetailsPage: React.FC<Props> = (props) => {

    const { id } = useParams<{ id: string }>()


    const { t } = useTranslation('articles')


    const dispatch = useAppDispatch()


    const comments = useSelector(getArticleComments.selectAll)

    const isLoadingComments = useSelector(getArticleCommentsIsLoading)


    const { className = '' } = props


    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })


    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails articleId={id} />

                <Text
                    className={cls.commentTitle}
                    title={t('Комментарии')}
                />

                <CommentList
                    isLoading={isLoadingComments}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ArticleDetailsPage