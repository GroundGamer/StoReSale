import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { $API } from 'shared/api'

import { createReducerManager } from './reducerManager'


import type { To } from 'history'

import type { NavigateOptions } from 'react-router'

import type { CombinedState, Reducer } from 'redux'

import type { ReducersMapObject } from '@reduxjs/toolkit'

import type { StateSchema, ThunkExtraArgs } from './StateSchema'



export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArgument: ThunkExtraArgs = {
        api: $API,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument
            }
        })
    })

    // eslint-disable-next-line
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']