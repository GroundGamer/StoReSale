import React from 'react'

import { classNames } from 'shared/lib'

import { Code } from 'shared/ui'

import cls from './ArticleCodeBlockComponent.module.scss'


import type { ArticleCodeBlock } from '../../module/types/Article'


interface Props {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = React.memo((props: Props) => {

    const { className = '' } = props

    const { block } = props


    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code}/>
        </div>
    )
})
