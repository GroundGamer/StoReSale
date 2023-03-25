import React from 'react'

import { CopyIcon } from 'shared/assets'

import { classNames } from 'shared/lib'

import { Button, BUTTON_THEME } from 'shared/ui'

import cls from './Code.module.scss'


interface Props {
    className?: string
    text: string
}

export const Code = React.memo((props: Props) => {

    const { className = '' } = props

    const { text = '' } = props

    const onCopy = () => {
        navigator.clipboard.writeText(text)
    }


    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={BUTTON_THEME.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
})
