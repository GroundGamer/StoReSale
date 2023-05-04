import { TestAsyncThunk } from 'shared/lib/tests'

import { fetchProfileData } from './fetchProfileData'


import { profileData } from 'entities/Profile/__mocks__/profileData'


describe('fetchProfileData', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)

        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }))

        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('fulfilled')

        expect(result.payload).toEqual(profileData)
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
