import React from 'react'

import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'

import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile'

import { classNames, useAppDispatch } from 'shared/lib'

import { Button, BUTTON_THEME, Text } from 'shared/ui'


import cls from './ProfilePageHeader.module.scss'


interface Props {
    className?: string
}

export const ProfilePageHeader = React.memo((props: Props) => {

    const { t } = useTranslation('profile')

    const dispatch = useAppDispatch()

    const readonly = useSelector(getProfileReadOnly)

    const { className = '' } = props

    const handleEditProfile = () => {
        dispatch(profileActions.setReadonly(false))
    }

    const handleCancelEditProfile = () => {
        dispatch(profileActions.cancelEdit())
    }

    const handleSaveProfile = () => {
        dispatch(updateProfileData())
    }


    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {readonly ? (
                <Button
                    onClick={handleEditProfile}
                    className={classNames(cls.editBtn)}
                    theme={BUTTON_THEME.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <React.Fragment>
                    <Button
                        onClick={handleCancelEditProfile}
                        className={classNames(cls.editBtn)}
                        theme={BUTTON_THEME.OUTLINE_RED}
                    >
                        {t('Отменить')}
                    </Button>

                    <Button
                        onClick={handleSaveProfile}
                        className={classNames(cls.saveBtn)}
                        theme={BUTTON_THEME.OUTLINE}
                    >
                        {t('Сохранить')}
                    </Button>
                </React.Fragment>
            )}

        </div>
    )
})