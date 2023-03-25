import { TestAsyncThunk } from 'shared/lib/tests'

import { fetchArticleById } from './fetchArticleById'


import { articleData } from '../../../__mocks__/articleData'


describe('fetchArticleById', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)

        thunk.api.get.mockReturnValue(Promise.resolve({ data: articleData }))

        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('fulfilled')

        expect(result.payload).toEqual(articleData)
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
