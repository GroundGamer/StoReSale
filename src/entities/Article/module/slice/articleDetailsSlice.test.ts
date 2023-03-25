import { articleDetailsReducer } from '../slice/articleDetailsSlice'

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'


import type { ArticleDetailsSchema } from '../types/Article'


import { articleData } from '../../__mocks__/articleData'


describe('profileSlice', () => {
    test('test update profile service | pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false
        }

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile service | fulfilled', () => {
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