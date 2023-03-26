import { createAsyncThunk } from '@reduxjs/toolkit'

import { getAPIErrorMessage } from 'shared/lib/errors'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { Comment } from 'entities/Comment'


export const fetchCommentsByArticleId = createAsyncThunk<
    Array<Comment>,
    string | undefined,
    ThunkApiConfig<string>
>(
    'articleComments/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        if (!articleId) {
            return rejectWithValue(getAPIErrorMessage('error'))
        }

        try {
            const response = await extra.api.get<Array<Comment>>('/comments/', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error: unknown) {
            return rejectWithValue(getAPIErrorMessage(error))
        }
    }
)
