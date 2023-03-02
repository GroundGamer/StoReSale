import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { DynamicModuleLoader } from 'shared/lib'

import { profileReducer } from 'entities/Profile'


import type { ReducersList } from 'shared/lib'


const reducers: ReducersList = {
    profile: profileReducer
}


interface Props {
    className?: string
}

const ProfilePage: React.FC<Props> = (props) => {

    const { t } = useTranslation()

    const { className = '' } = props


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage