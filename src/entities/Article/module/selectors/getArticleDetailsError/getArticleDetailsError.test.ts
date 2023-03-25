import { getArticleDetailsError } from './getArticleDetailsError'


import type { StateSchema } from 'app/providers'


describe('getArticleDetailsError', () => {
    test('check and test error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: '123'
            }
        }

        expect(getArticleDetailsError(state as StateSchema)).toEqual('123')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})