import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'


import cls from './NotFoundPage.module.scss'


interface Props {
    className?: string
}

export const NotFoundPage: React.FC<Props> = (props) => {

    const { t } = useTranslation()

    const { className = '' } = props


    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
}
