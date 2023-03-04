import React from 'react'

import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'

import { classNames } from 'shared/lib'

import { Button, BUTTON_THEME, Input, Text } from 'shared/ui'

import { getProfileData } from '../../module/selectors/getProfileData/getProfileData'


import cls from './ProfileCard.module.scss'


interface Props {
    className?: string
}

export const ProfileCard: React.FC<Props> = (props) => {

    const { t } = useTranslation('profile')

    const profileData = useSelector(getProfileData)

    const { first, lastname } = profileData || {}

    const { className = '' } = props


    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={classNames(cls.header)}>
                <Text title={t('Профиль')}/>
                <Button
                    className={classNames(cls.editBtn)}
                    theme={BUTTON_THEME.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={first}
                    // className={cls.input}
                    placeholder={t('Ваше имя')}
                />

                <Input
                    value={lastname}
                    // className={cls.input}
                    placeholder={t('Ваша фамилия')}
                />
            </div>
        </div>
    )
}
