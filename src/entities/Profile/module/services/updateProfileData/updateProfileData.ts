import { createAsyncThunk } from '@reduxjs/toolkit'

import { getAPIErrorMessage } from 'shared/lib/errors'

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

import { validateProfileData } from '../../services/validateProfileData/validateProfileData'

import { VALIDATE_PROFILE_ERROR } from '../../types/Profile'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { Profile } from '../../types/Profile'


export const updateProfileData = createAsyncThunk<Profile, void, ThunkApiConfig<string | Array<VALIDATE_PROFILE_ERROR>>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error: unknown) {
            return rejectWithValue(getAPIErrorMessage(error))
        }
    }
)