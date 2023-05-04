import { createAsyncThunk } from '@reduxjs/toolkit'

import { getAPIErrorMessage } from 'shared/lib/errors'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { Profile } from '../../types/Profile'


export const fetchProfileData = createAsyncThunk<Profile, string, ThunkApiConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error: unknown) {
            return rejectWithValue(getAPIErrorMessage(error))
        }
    }
)