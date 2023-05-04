import React from 'react'

import { useAppDispatch } from 'shared/lib'


import type { ActionCreatorWithPayload } from '@reduxjs/toolkit/src/createAction'

import type { WrapperInput, DataWrapperInput } from 'shared/module'


interface Options<Keys, Action extends ActionCreatorWithPayload<DataWrapperInput<Keys, any>>> {
    action: Action
}

function useWrapperInput<Keys, Action extends ActionCreatorWithPayload<DataWrapperInput<Keys, any>>> (options: Options<Keys, Action>) {

    const dispatch = useAppDispatch()

    const { action } = options


    const handleInputStringWrapper = React.useCallback<WrapperInput<Keys, string>>(({ field, value }) => {
        dispatch(action({ field, value: String(value) }))
    }, [action, dispatch])


    const handleInputNumberWrapper = React.useCallback<WrapperInput<Keys, number>>(({ field, value }) => {

        if (/^\d+$/.test(String(value))) {
            dispatch(action({ field, value }))
        }

    }, [action, dispatch])


    return { handleInputStringWrapper, handleInputNumberWrapper }
}

export default useWrapperInput