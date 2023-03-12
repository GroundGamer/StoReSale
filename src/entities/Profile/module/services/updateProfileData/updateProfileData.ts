import { createAsyncThunk } from '@reduxjs/toolkit'

import { getAPIErrorMessage } from 'shared/lib/errors'

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { Profile } from '../../types/Profile'


export const updateProfileData = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (error: unknown) {
            return rejectWithValue(getAPIErrorMessage(error))
        }
    }
)