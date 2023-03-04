import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'


import type { ReducersMapObject } from '@reduxjs/toolkit'

import type { StateSchema } from '../config/StateSchema'


interface Props {
    children: React.ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: React.FC<Props> = (props) => {

    const { children } = props

    const {
        initialState,
        asyncReducers
    } = props

    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
