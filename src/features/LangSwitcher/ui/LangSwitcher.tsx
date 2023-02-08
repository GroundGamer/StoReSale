import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { Button } from 'shared/ui'


import cls from './LangSwitcher.module.scss'


interface Props {
    className?: string
}

export const LangSwitcher: React.FC<Props> = (props) => {

    const { t, i18n } = useTranslation()

    const { className = '' } = props


    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


    return (
        <Button
            onClick={toggleLang}
            className={classNames(cls.langSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
}
