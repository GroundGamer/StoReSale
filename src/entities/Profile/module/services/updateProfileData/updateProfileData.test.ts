import { TestAsyncThunk } from 'shared/lib/tests'

import { VALIDATE_PROFILE_ERROR } from '../../types/Profile'

import { updateProfileData } from './updateProfileData'


import { profileData } from 'entities/Profile/__mocks__/profileData'


describe('updateProfileData', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        })

        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }))

        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('fulfilled')

        expect(result.payload).toEqual(profileData)
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileData, lastname: '', first: '' }
            }
        })

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA
        ])
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData
            }
        })

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('')
    })
})
