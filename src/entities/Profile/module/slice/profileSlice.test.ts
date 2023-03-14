import { profileActions, profileReducer } from '../slice/profileSlice'

import { VALIDATE_PROFILE_ERROR } from '../types/Profile'

import { updateProfileData } from '../services/updateProfileData/updateProfileData'


import type { ProfileSchema } from '../types/Profile'


import { profileData } from 'entities/Profile/__mocks__/profileData'


describe('profileSlice', () => {
    test('test set Readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true
        }

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false))
        ).toEqual({
            readonly: false
        })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data: profileData, form: { username: '' }}

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            data: profileData,
            form: profileData,
            readonly: true,
            validateErrors: undefined
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' }}

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ field: 'username', value: 'admin' })
        )).toEqual({
            form: { username: 'admin' }
        })
    })

    test('test update profile service | pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [VALIDATE_PROFILE_ERROR.SERVER_ERROR]
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile service | fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [VALIDATE_PROFILE_ERROR.NO_DATA],
            readonly: true
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(profileData, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: profileData,
            data: profileData
        })
    })
})