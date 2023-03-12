import React from 'react'

import { useSelector } from 'react-redux'

import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
    getProfileIsLoading,
    getProfileError,
    profileActions,
    getProfileReadOnly,
    getProfileForm
} from 'entities/Profile'

import { classNames } from 'shared/lib'

import { DynamicModuleLoader } from 'shared/lib'

import { useWrapperInput, useAppDispatch } from 'shared/lib'

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

    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadOnly)

    const {
        handleInputStringWrapper,
        handleInputNumberWrapper
    } = useWrapperInput<KeyProfile>({ action: profileActions.updateProfile })

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


    React.useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])



    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>

                <ProfilePageHeader />

                <ProfileCard
                    {...dataToCard}
                    data={formData}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage