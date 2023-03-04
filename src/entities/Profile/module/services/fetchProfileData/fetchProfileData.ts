import { createAsyncThunk } from '@reduxjs/toolkit'

import { isAxiosError } from 'shared/api'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { Profile } from '../../types/Profile'


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Profile>('/profile')

            return response.data
        } catch (error: unknown) {
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