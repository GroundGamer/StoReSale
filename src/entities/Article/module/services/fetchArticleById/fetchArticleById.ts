import { createAsyncThunk } from '@reduxjs/toolkit'

import { getAPIErrorMessage } from 'shared/lib/errors'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { Article } from '../../types/Article'


export const fetchArticleById = createAsyncThunk<Article, string, ThunkApiConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error: unknown) {
            return rejectWithValue(getAPIErrorMessage(error))
        }
    }
)
