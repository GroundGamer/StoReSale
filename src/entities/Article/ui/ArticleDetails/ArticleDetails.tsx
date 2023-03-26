import React from 'react'

import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'

import { CalendarIcon, EyeIcon } from 'shared/assets'

import { classNames, DynamicModuleLoader, useAppDispatch, useInitialEffect } from 'shared/lib'

import { Avatar, Skeleton, Text, TEXT_ALIGN, TEXT_THEME, TEXT_SIZE, Icon } from 'shared/ui'

import { fetchArticleById } from '../../module/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../module/slice/articleDetailsSlice'

import { getArticleDetailsIsLoading } from '../../module/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'

import { getArticleDetailsData } from '../../module/selectors/getArticleDetailsData/getArticleDetailsData'

import { getArticleDetailsError } from '../../module/selectors/getArticleDetailsError/getArticleDetailsError'

import { ArticleBlockType } from '../../module/types/Article'

import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent'

import cls from './ArticleDetails.module.scss'


import type { ArticleBlock } from '../../module/types/Article'


interface Props {
    className?: string

    articleId: string
}

const reducers = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = React.memo((props: Props) => {

    const { t } = useTranslation('articles')

    const dispatch = useAppDispatch()

    const article = useSelector(getArticleDetailsData)

    const {
        blocks = [],
        createdAt,
        img,
        subtitle,
        title,
        views
    } = article || {}

    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)

    const { className = '' } = props

    const { articleId } = props


    const renderBlock = React.useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        className={cls.block}
                        block={block}
                        key={block.title}
                    />
                )

            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        className={cls.block}
                        block={block}
                        key={block.code}
                    />
                )

            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        className={cls.block}
                        block={block}
                        key={block.title}
                    />
                )

            default:
                return null
        }
    }, [])


    useInitialEffect(() => {
        dispatch(fetchArticleById(articleId))
    })


    let content

    if (isLoading) {
        content = (
            <React.Fragment>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={'100%'} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            </React.Fragment>
        )
    } else if (error) {
        content = (
            <Text
                theme={TEXT_THEME.ERROR}
                align={TEXT_ALIGN.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        )
    } else {
        content = (
            <React.Fragment>

                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={img}
                        className={cls.avatar}
                    />
                </div>

                <Text
                    className={cls.title}
                    size={TEXT_SIZE.L}
                    title={title}
                    text={subtitle}
                />

                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />

                    <Text text={String(views)} />
                </div>

                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />

                    <Text text={createdAt} />
                </div>

                {blocks.map(renderBlock)}
            </React.Fragment>
        )
    }


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
