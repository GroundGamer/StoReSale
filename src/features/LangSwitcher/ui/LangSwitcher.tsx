import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { Button } from 'shared/ui'
import { BUTTON_THEME } from 'shared/ui/Button/Button'


interface Props {
    className?: string
    short?: boolean
}

export const LangSwitcher = React.memo((props: Props) => {

    const { t, i18n } = useTranslation()

    const { className = '' } = props

    const { short = false } = props


    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


    return (
        <Button
            onClick={toggleLang}
            theme={BUTTON_THEME.CLEAR}
            className={classNames('', {}, [className])}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    )
})
