import { TestAsyncThunk } from 'shared/lib/tests'

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'


import { commentsData } from '../../../__mocks__/commentsData'


describe('fetchCommentsByArticleId', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)

        thunk.api.get.mockReturnValue(Promise.resolve({ data: commentsData }))

        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('fulfilled')

        expect(result.payload).toEqual(commentsData)
    })

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId)

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
