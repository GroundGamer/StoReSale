import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { classNames, DynamicModuleLoader } from 'shared/lib'
import { Button, BUTTON_THEME, TEXT_THEME, Input, Text } from 'shared/ui'

import { getLoginStateUsername } from '../../model/selectors/getLoginStateUsername/getLoginStateUsername'
import { getLoginStatePassword } from '../../model/selectors/getLoginStatePassword/getLoginStatePassword'
import { getLoginStateError } from '../../model/selectors/getLoginStateError/getLoginStateError'
import { getLoginStateIsLoading } from '../../model/selectors/getLoginStateIsLoading/getLoginStateIsLoading'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'


import cls from './LoginForm.module.scss'



import type { DeepPartial } from '@reduxjs/toolkit'

import type { ReducersList } from 'shared/lib'

import type { LoginSchema } from '../../model/types/LoginSchema'



const initialReducers: DeepPartial<ReducersList<LoginSchema>> = {
    loginForm: loginReducer
}


export interface Props {
    className?: string
}

const LoginForm = React.memo((props: Props) => {

    const { t } = useTranslation()

    const error = useSelector(getLoginStateError)
    const isLoading = useSelector(getLoginStateIsLoading)
    const password = useSelector(getLoginStatePassword)
    const username = useSelector(getLoginStateUsername)

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
        <DynamicModuleLoader<LoginSchema>
            removeAfterUnmount
            reducers={initialReducers as ReducersList<LoginSchema>}
        >
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
        </DynamicModuleLoader>
    )
})


export default LoginForm
