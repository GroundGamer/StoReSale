import React from 'react'

import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'


import type { DeepPartial } from '@reduxjs/toolkit'

import type { StateSchema } from '../config/StateSchema'


interface Props {
    children: React.ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: React.FC<Props> = (props) => {

    const { children } = props

    const { initialState } = props

    const store = createReduxStore(initialState as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
