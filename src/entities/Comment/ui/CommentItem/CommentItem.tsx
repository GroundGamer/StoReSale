import React from 'react'

import { RoutePath } from 'shared/config'

import { classNames } from 'shared/lib'

import { AppLink, Avatar, Skeleton, Text } from 'shared/ui'

import cls from './CommentItem.module.scss'


import type { Comment } from '../../module/types/Comment'


interface Props {
    comment?: Comment
    className?: string
    isLoading?: boolean
}

export const CommentItem: React.FC<Props> = (props) => {

    const { className = '' } = props

    const { comment, isLoading = false } = props


    if (isLoading) {
        return (
            <div className={classNames(cls.commentItem, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'} />

                    <Skeleton className={cls.username} width={100} height={15} />
                </div>

                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        )
    }


    if (!comment) {
        return null
    }


    return (
        <div className={classNames(cls.commentItem, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && (
                    <Avatar size={30} src={comment.user.avatar} />
                )}

                <Text className={cls.username} title={comment.user.username} />
            </AppLink>

            <Text className={cls.text} text={comment.text} />
        </div>
    )
}