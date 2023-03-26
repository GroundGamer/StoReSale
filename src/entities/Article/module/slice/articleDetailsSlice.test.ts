import { articleDetailsReducer } from '../slice/articleDetailsSlice'

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'


import type { ArticleDetailsSchema } from '../types/Article'


import { articleData } from '../../__mocks__/articleData'


describe('article details slice', () => {
    test('test update article details service | pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false
        }

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending
        )).toEqual({
            isLoading: true
        })
    })

    test('test update article details service | fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true
        }

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(articleData, '1', '1')
        )).toEqual({
            isLoading: false,
            data: articleData
        })
    })
})