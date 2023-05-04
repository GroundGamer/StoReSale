import React from 'react'

import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'

import { getProfileData, getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile'

import { classNames, useAppDispatch } from 'shared/lib'

import { Button, BUTTON_THEME, Text } from 'shared/ui'


import cls from './ProfilePageHeader.module.scss'
import { getUserAuthData } from 'entities/User'


interface Props {
    className?: string
}

export const ProfilePageHeader = React.memo((props: Props) => {

    const { t } = useTranslation('profile')


    const dispatch = useAppDispatch()


    const authData = useSelector(getUserAuthData)

    const profileData = useSelector(getProfileData)

    const readonly = useSelector(getProfileReadOnly)

    const { className = '' } = props


    const canEdit = authData?.id === profileData?.id


    const handleEditProfile = () => {
        dispatch(profileActions.setReadonly(false))
    }


    const handleCancelEditProfile = () => {
        dispatch(profileActions.cancelEdit())
    }


    const handleSaveProfile = () => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(updateProfileData())
        }
    }


    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <div className={cls.btnWrapper}>
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
            )}

        </div>
    )
})