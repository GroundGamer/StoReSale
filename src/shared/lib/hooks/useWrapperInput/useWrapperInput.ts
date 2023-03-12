import React from 'react'

import { useAppDispatch } from 'shared/lib'


import type { ActionCreatorWithPayload } from '@reduxjs/toolkit/src/createAction'

import type { WrapperInput, DataWrapperInput } from 'shared/module'


interface Options <Keys = any>{
    action: ActionCreatorWithPayload<DataWrapperInput<Keys, string | number>>
}

export const useWrapperInput = <Keys = any>(options: Options<Keys>) => {

    const dispatch = useAppDispatch()

    const { action } = options


    const handleInputStringWrapper = React.useCallback<WrapperInput<Keys, string>>(({ field, value }) => {
        dispatch(action({ field, value }))
    }, [action, dispatch])


    const handleInputNumberWrapper = React.useCallback<WrapperInput<Keys, number>>(({ field, value }) => {

        if (/^\d+$/.test(String(value))) {
            dispatch(action({ field, value }))
        }

    }, [action, dispatch])


    return { handleInputStringWrapper, handleInputNumberWrapper }
}