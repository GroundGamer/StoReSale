import axios from 'axios'

import { userActions } from 'entities/User'

import { TestAsyncThunk } from 'shared/lib/tests'

import { loginByUsername } from './loginByUsername'


jest.mock('axios')


const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {

    test('success', async () => {
        const userData = {
            id: '1',
            username: 'admin',
            password: '123'
        }

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))


        const thunk = new TestAsyncThunk(loginByUsername)

        const result = await thunk.callThunk({ username: '123', password: '123' })


        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)

        expect(mockedAxios.post).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userData)
    })

    test('rejected', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))


        const thunk = new TestAsyncThunk(loginByUsername)

        const result = await thunk.callThunk({ username: '123', password: '123' })


        expect(thunk.dispatch).toHaveBeenCalledTimes(2)

        expect(mockedAxios.post).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
