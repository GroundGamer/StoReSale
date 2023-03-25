import React from 'react'

import { classNames } from 'shared/lib'

import { Text, TEXT_ALIGN } from 'shared/ui'

import cls from './ArticleImageBlockComponent.module.scss'


import type { ArticleImageBlock } from '../../module/types/Article'


interface Props {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = React.memo((props: Props) => {

    const { className = '' } = props

    const { block } = props


    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img
                alt={block.title}
                className={cls.image}
                src={block.src}
            />

            {block.title && (
                <Text text={block.title} align={TEXT_ALIGN.CENTER} />
            )}
        </div>
    )
})
