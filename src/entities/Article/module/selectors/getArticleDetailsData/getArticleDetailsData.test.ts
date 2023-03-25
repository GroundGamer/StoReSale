import { getArticleDetailsData } from './getArticleDetailsData'


import type { StateSchema } from 'app/providers'


import { articleData } from '../../../__mocks__/articleData'


describe('getArticleDetailsData', () => {
    test('check and test article details data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: articleData
            }
        }

        expect(getArticleDetailsData(state as StateSchema)).toEqual(articleData)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
})