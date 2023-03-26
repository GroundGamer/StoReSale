import { getArticleCommentsIsLoading } from './getArticleCommentsIsLoading'


import type { StateSchema } from 'app/providers'


describe('getArticleCommentsIsLoading', () => {
    test('check and test isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                isLoading: true
            }
        }

        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined)
    })
})