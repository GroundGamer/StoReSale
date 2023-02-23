import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'
import { Button, Input } from 'shared/ui'


import cls from './LoginForm.module.scss'


interface Props {
    className?: string
}

export const LoginForm: React.FC<Props> = (props) => {

    const { className = '' } = props

    const { t } = useTranslation()

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')


    return (
        <div className={classNames(cls.loginForm, {}, [className])}>

            <Input
                autoFocus
                placeholder={t('Введите логин')}
                value={username}
                onChange={setUsername}
            />

            <Input
                placeholder={t('Введите пароль')}
                value={password}
                onChange={setPassword}
            />

            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>

        </div>
    )
}
