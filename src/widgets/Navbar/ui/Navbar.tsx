import React from 'react'

import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/AuthByUsername'

import { getUserAuthData, userActions } from 'entities/User'

import { classNames } from 'shared/lib'

import { useAppDispatch } from 'shared/lib'

import { Button, BUTTON_THEME } from 'shared/ui'

import cls from './Navbar.module.scss'


interface Props {
    className?: string
}

export const Navbar = React.memo((props: Props) => {

    const { className = '' } = props

    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = React.useState(false)


    const authData = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()


    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowAuthModal = React.useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = React.useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])


    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    onClick={onLogout}
                    theme={BUTTON_THEME.BACKGROUND_INVERTED}
                    className={classNames(cls.links)}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
    }


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onShowAuthModal}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    )
})
