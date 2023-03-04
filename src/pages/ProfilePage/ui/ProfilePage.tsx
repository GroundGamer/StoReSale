import React from 'react'

import { classNames, useAppDispatch } from 'shared/lib'

import { DynamicModuleLoader } from 'shared/lib'

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'


import type { ReducersList } from 'shared/lib'


const reducers: ReducersList = {
    profile: profileReducer
}


interface Props {
    className?: string
}

const ProfilePage: React.FC<Props> = (props) => {

    const dispatch = useAppDispatch()

    const { className = '' } = props


    React.useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])



    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage