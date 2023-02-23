import React from 'react'


import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/AuthByUsername'

import { classNames } from 'shared/lib'
import { Button, BUTTON_THEME } from 'shared/ui'

import cls from './Navbar.module.scss'


interface Props {
    className?: string
}

export const Navbar: React.FC<Props> = (props) => {

    const { className = '' } = props

    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = React.useState(false)

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true)
    }, [])


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
}
