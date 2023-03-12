import { createSlice } from '@reduxjs/toolkit'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'


import type { PayloadAction } from '@reduxjs/toolkit'

import type { DataWrapperInput } from 'shared/module'

import type { KeyProfile, Profile, ProfileSchema } from '../types/Profile'


const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.validateErrors = undefined
            state.form = state.data
        },
        updateProfile: (state, action: PayloadAction<DataWrapperInput<KeyProfile, string | number>>) => {
            const { field, value } = action.payload

            state.form = {
                ...state.form,
                [field]: value
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        }).addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false
            state.error = undefined
            state.data = action.payload
            state.form = action.payload
        }).addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }).addCase(updateProfileData.pending, (state) => {
            state.validateErrors = undefined
            state.isLoading = true
        }).addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false
            state.validateErrors = undefined
            state.data = action.payload
            state.form = action.payload
            state.readonly = true
        }).addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.validateErrors = action.payload
        })
    }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
