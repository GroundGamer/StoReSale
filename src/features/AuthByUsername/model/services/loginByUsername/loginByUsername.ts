import { createAsyncThunk } from '@reduxjs/toolkit'

import { userActions } from 'entities/User'

import { USER_LOCALSTORAGE_KEY } from 'shared/variables'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { User } from 'entities/User'
import { isAxiosError } from 'shared/api'


interface LoginByUsername {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkApiConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue
        } = thunkAPI


        try {
            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (error) {
            let messageError = ''

            if (isAxiosError(error)) {
                console.log(error)

                const { response } = error
                const { data } = response || {}
                const { message } = data || {}

                messageError = message
            }

            return rejectWithValue(messageError)
        }
    }
)