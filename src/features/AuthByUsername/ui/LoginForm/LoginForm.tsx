import React from 'react'

import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { DynamicModuleLoader } from 'shared/lib'

import { useAppDispatch } from 'shared/lib'

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



const initialReducers: DeepPartial<ReducersList> = {
    loginForm: loginReducer
}


export interface Props {
    className?: string
    onSuccess: () => void
}

const LoginForm = React.memo((props: Props) => {

    const { t } = useTranslation()

    const error = useSelector(getLoginStateError)
    const isLoading = useSelector(getLoginStateIsLoading)
    const password = useSelector(getLoginStatePassword)
    const username = useSelector(getLoginStateUsername)

    const dispatch = useAppDispatch()


    const { className = '' } = props

    const { onSuccess } = props


    const onChangeUsername = React.useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = React.useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = React.useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.()
        }
    }, [onSuccess, dispatch, username, password])


    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers as ReducersList}
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
