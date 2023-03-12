import React from 'react'

import { useTranslation } from 'react-i18next'

import { CurrencySelect } from 'entities/Currency'
import { CountrySelect } from 'entities/Country'

import { classNames } from 'shared/lib'

import { Input, Loader, Text, TEXT_THEME, TEXT_ALIGN, Avatar } from 'shared/ui'


import cls from './ProfileCard.module.scss'


import type { WrapperInput } from 'shared/module'

import type { Mods } from 'shared/lib/classNames/classNames'

import type { KeyProfile, Profile } from '../../module/types/Profile'


interface Props {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    handleInputStringWrapper?: WrapperInput<KeyProfile, string>
    handleInputNumberWrapper?: WrapperInput<KeyProfile, number>
}

export const ProfileCard = React.memo((props: Props) => {

    const { t } = useTranslation('profile')

    const { className = '' } = props

    const {
        data,
        isLoading,
        error,
        readonly
    } = props

    const { handleInputStringWrapper, handleInputNumberWrapper } = props

    const {
        first = '',
        lastname = '',
        age = 0,
        city = 'Moscow',
        username,
        avatar,
        currency,
        country
    } = data || {}


    const mods = React.useMemo<Mods>(() => {
        return {
            [cls.editing]: !readonly
        }
    }, [readonly])


    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [
                className,
                cls.loading
            ])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    align={TEXT_ALIGN.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t(error)}
                    theme={TEXT_THEME.ERROR}
                />
            </div>
        )
    }


    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>

                {avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={avatar} alt={'Avatar'} />
                    </div>
                )}

                <Input
                    value={first}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'first', value })}
                    placeholder={t('Ваше имя')}
                    readOnly={readonly}
                />

                <Input
                    value={lastname}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'lastname', value })}
                    placeholder={t('Ваша фамилия')}
                    readOnly={readonly}
                />

                <Input
                    value={age}
                    onChange={(value) => handleInputNumberWrapper?.({ field: 'age', value: Number(value) })}
                    placeholder={t('Ваш возраст')}
                    readOnly={readonly}
                />

                <Input
                    value={city}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'city', value })}
                    placeholder={t('Ваш город')}
                    readOnly={readonly}
                />

                <CountrySelect
                    value={country}
                    className={cls.input}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'country', value })}
                    readOnly={readonly}
                />

                <Input
                    value={username}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'username', value })}
                    placeholder={t('Ваш никнейм')}
                    readOnly={readonly}
                />

                <Input
                    value={avatar}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'avatar', value })}
                    placeholder={t('Ваш аватар')}
                    readOnly={readonly}
                />

                <CurrencySelect
                    className={cls.input}
                    value={currency}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'currency', value })}
                    readOnly={readonly}
                />

            </div>
        </div>
    )
})
