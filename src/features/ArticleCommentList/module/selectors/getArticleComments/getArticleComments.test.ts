import { getArticleComments } from './getArticleComments'


import type { StateSchema } from 'app/providers'


import { commentsData, commentsEntities } from '../../../__mocks__/commentsData'



describe('getArticleComments', () => {
    test('check and test article comments data', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: commentsData
        }

        expect(getArticleComments.selectAll(state as StateSchema)).toEqual(commentsEntities)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticleComments.selectAll(state as StateSchema)).toEqual([])
    })
})