import { createSlice } from '@reduxjs/toolkit'

import { loginByUsername } from '../services/loginByUsername/loginByUsername'


import type { PayloadAction } from '@reduxjs/toolkit'

import type { LoginSchema } from '../types/LoginSchema'


const initialState: LoginSchema = {
    username: '',
    password: '',
    error: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = ''
            state.isLoading = true
        }).addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false
            state.error = ''
        }).addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const {
    actions: loginActions,
    reducer: loginReducer
} = loginSlice
