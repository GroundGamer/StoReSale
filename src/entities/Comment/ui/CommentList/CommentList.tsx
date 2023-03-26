import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { Text } from 'shared/ui'

import { CommentItem } from '../CommentItem/CommentItem'

import cls from './CommentList.module.scss'


import type { Comment } from '../../module/types/Comment'


interface Props {
    comments?: Array<Comment>
    className?: string
    isLoading?: boolean
}

export const CommentList: React.FC<Props> = (props) => {

    const { t } = useTranslation()

    const { className = '' } = props

    const { comments = [], isLoading = false } = props


    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentItem
                        className={cls.comment}
                        key={comment.text}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </div>
    )
}
