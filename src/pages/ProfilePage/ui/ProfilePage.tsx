import React from 'react'

import { useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'

import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
    getProfileIsLoading,
    getProfileError,
    profileActions,
    getProfileReadOnly,
    getProfileForm,
    getProfileValidateErrors, VALIDATE_PROFILE_ERROR
} from 'entities/Profile'

import { classNames, useInitialEffect } from 'shared/lib'

import { DynamicModuleLoader } from 'shared/lib'

import { useWrapperInput, useAppDispatch } from 'shared/lib'

import { Text, TEXT_THEME } from 'shared/ui'

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'


import type { ReducersList } from 'shared/lib'

import type { KeyProfile } from 'entities/Profile'


const reducers: ReducersList = {
    profile: profileReducer
}


interface Props {
    className?: string
}

const ProfilePage: React.FC<Props> = (props) => {

    const { id } = useParams()

    const { t } = useTranslation('profile')

    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadOnly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const {
        handleInputStringWrapper,
        handleInputNumberWrapper
    } = useWrapperInput<KeyProfile, typeof profileActions.updateProfile>({ action: profileActions.updateProfile })

    const { className = '' } = props



    const dataToCard = React.useMemo(() => {
        return {
            isLoading,
            error,
            readonly,
            handleInputStringWrapper,
            handleInputNumberWrapper
        }
    }, [error, handleInputStringWrapper, handleInputNumberWrapper, isLoading, readonly])


    const validateErrorTranslations = React.useMemo(() => {
        return {
            [VALIDATE_PROFILE_ERROR.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
            [VALIDATE_PROFILE_ERROR.INCORRECT_USERNAME]: t('Никнейм обязателен'),
            [VALIDATE_PROFILE_ERROR.NO_DATA]: t('Данные не указаны'),
            [VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA]: t('Имя и фамилия обязяательны'),
            [VALIDATE_PROFILE_ERROR.INCORRECT_AGE]: t('Неккоректный возраст')
        }
    }, [t])

    const validateErrorBlock = React.useMemo(() => {
        let block = null

        if (typeof validateErrors === 'string' && validateErrors) {
            block = validateErrors
        }

        if (typeof validateErrors !== 'string' && validateErrors?.length) {
            block = validateErrors?.map((error) => (
                <Text key={error} theme={TEXT_THEME.ERROR} text={validateErrorTranslations[error]} />
            ))
        }

        return block
    }, [validateErrorTranslations, validateErrors])


    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>

                <ProfilePageHeader />

                {validateErrorBlock}

                <ProfileCard
                    {...dataToCard}
                    data={formData}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage