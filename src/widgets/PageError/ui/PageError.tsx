import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'
import { Button } from 'shared/ui'


import cls from './PageError.module.scss'


interface Props {
    className?: string
}

export const PageError = React.memo((props: Props) => {

    const { className = '' } = props

    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }


    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>

            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
})
