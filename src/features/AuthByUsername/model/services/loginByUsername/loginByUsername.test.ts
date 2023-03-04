import { userActions } from 'entities/User'

import { TestAsyncThunk } from 'shared/lib/tests'

import { loginByUsername } from './loginByUsername'


describe('loginByUsername', () => {

    test('success', async () => {
        const userData = {
            id: '1',
            username: 'admin',
            password: '123'
        }

        const thunk = new TestAsyncThunk(loginByUsername)

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }))

        const result = await thunk.callThunk({ username: '123', password: '123' })


        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)

        expect(thunk.api.post).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userData)
    })

    test('rejected', async () => {


        const thunk = new TestAsyncThunk(loginByUsername)

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk({ username: '123', password: '123' })


        expect(thunk.dispatch).toHaveBeenCalledTimes(2)

        expect(thunk.api.post).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
