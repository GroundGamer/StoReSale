import { createSlice } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from 'shared/variables'


import type { PayloadAction } from '@reduxjs/toolkit'

import type { User, UserSchema } from '../types/User'


const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initialAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)

            state.authData = undefined
        }
    }
})

export const { actions: userActions, reducer: userReducer } = userSlice
