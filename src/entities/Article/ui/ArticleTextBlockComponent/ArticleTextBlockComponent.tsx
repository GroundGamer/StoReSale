import React from 'react'

import { classNames } from 'shared/lib'

import { Text } from 'shared/ui'

import cls from './ArticleTextBlockComponent.module.scss'


import type { ArticleTextBlock } from '../../module/types/Article'


interface Props {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = React.memo((props: Props) => {

    const { className = '' } = props

    const { block } = props


    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={cls.title}
                />
            )}

            {block.paragraphs.map((paragraph) => (
                <Text
                    className={cls.paragraph}
                    text={paragraph}
                    key={paragraph}
                />
            ))}
        </div>
    )
})
