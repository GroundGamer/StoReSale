import type { AxiosInstance } from 'axios'

import type { To } from 'history'

import type { CombinedState } from 'redux'

import type { NavigateOptions } from 'react-router'

import type { AnyAction, Reducer, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit'

import type { LoginSchema } from 'features/AuthByUsername'

import type { CounterSchema } from 'entities/Counter'
import type { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'


export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    profile?: ProfileSchema
    loginForm?: LoginSchema
}
export type StateSchemaKey = keyof StateSchema


export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce?: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add?: (key: StateSchemaKey, reducer: Reducer) => void
    remove?: (key: StateSchemaKey) => void
}


export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}


export interface ThunkExtraArgs {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkApiConfig<RejectValue>{
    rejectValue: RejectValue
    extra: ThunkExtraArgs
    state: StateSchema
}