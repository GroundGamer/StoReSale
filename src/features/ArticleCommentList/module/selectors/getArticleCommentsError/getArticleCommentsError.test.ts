import { getArticleCommentsError } from './getArticleCommentsError'


import type { StateSchema } from 'app/providers'


describe('getArticleCommentsError', () => {
    test('check and test error', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                error: '123'
            }
        }

        expect(getArticleCommentsError(state as StateSchema)).toEqual('123')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined)
    })
})