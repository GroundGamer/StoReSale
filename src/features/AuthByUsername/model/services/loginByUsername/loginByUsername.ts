import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { userActions } from 'entities/User'

import { USER_LOCALSTORAGE_KEY } from 'shared/variables'


import type { User } from 'entities/User'


interface LoginByUsername {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:3001/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (error) {
            console.log(error)

            const { response } = error
            const { data } = response || {}
            const { message } = data || {}

            return thunkAPI.rejectWithValue(message)
        }
    }
)