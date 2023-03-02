import React from 'react'

import { useStore } from 'react-redux'

import { useAppDispatch } from 'shared/lib'


import type { Reducer } from '@reduxjs/toolkit'

import type { ReduxStoreWithManager, StateSchemaKey } from 'app/providers'


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface Props {
    children: React.ReactElement
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export function DynamicModuleLoader(props: Props) {
    const dispatch = useAppDispatch()

    const store = useStore() as ReduxStoreWithManager


    const { children } = props

    const { removeAfterUnmount = false } = props

    const { reducers } = props


    React.useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer)

            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(name)

                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }

        // eslint-disable-next-line
    }, [])




    return children
}
