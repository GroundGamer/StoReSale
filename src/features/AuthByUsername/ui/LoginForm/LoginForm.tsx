import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'
import { Button, BUTTON_THEME, TEXT_THEME, Input, Text } from 'shared/ui'

import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'


import cls from './LoginForm.module.scss'


interface Props {
    className?: string
}

export const LoginForm = React.memo((props: Props) => {

    const { t } = useTranslation()

    const { username, password, isLoading, error } = useSelector(getLoginState)

    const dispatch = useDispatch()


    const { className = '' } = props


    const onChangeUsername = React.useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = React.useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = React.useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])


    return (
        <div className={classNames(cls.loginForm, {}, [className])}>

            <Text title={t('Форма авторизации')}/>

            {error && (<Text text={error} theme={TEXT_THEME.ERROR} />)}

            <Input
                autoFocus
                placeholder={t('Введите логин')}
                value={username}
                onChange={onChangeUsername}
            />

            <Input
                placeholder={t('Введите пароль')}
                value={password}
                onChange={onChangePassword}
            />

            <Button
                theme={BUTTON_THEME.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>

        </div>
    )
})
