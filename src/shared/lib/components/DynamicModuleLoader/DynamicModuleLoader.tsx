import React from 'react'

import { useDispatch, useStore } from 'react-redux'


import type { Reducer } from 'react'

import type { AnyAction } from '@reduxjs/toolkit'

import type { ReduxStoreWithManager, StateSchemaKey } from 'app/providers'


export type ReducersList<Schema> = {
    [name in StateSchemaKey]: Reducer<Schema, AnyAction>
}

type ReducersListEntry<Schema> = [StateSchemaKey, Reducer<Schema, AnyAction>]

interface Props <Schema>{
    children: React.ReactElement
    reducers: ReducersList<Schema>
    removeAfterUnmount?: boolean
}

export function DynamicModuleLoader<Schema = StateSchemaKey>(props: Props<Schema>) {
    const dispatch = useDispatch()

    const store = useStore() as ReduxStoreWithManager


    const { children } = props

    const { removeAfterUnmount = false } = props

    const { reducers } = props


    React.useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry<Schema>) => {
            store.reducerManager.add(name, reducer)

            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry<Schema>) => {
                    store.reducerManager.remove(name)

                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }

        // eslint-disable-next-line
    }, [])




    return children
}
