import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchCommentsByArticleId } from 'features/ArticleCommentList'

import { getArticleDetailsData } from 'entities/Article'

import { getUserAuthData } from 'entities/User'

import { isAxiosError } from 'shared/api'


import type { ThunkApiConfig } from 'app/providers/StoreProvider'

import type { Comment } from 'entities/Comment'



export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkApiConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const { dispatch, extra, rejectWithValue, getState } = thunkAPI

        const userData = getUserAuthData(getState())

        const article = getArticleDetailsData(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text
            })

            if (!response.data) {
                throw new Error()
            }

            dispatch(fetchCommentsByArticleId(article?.id))

            return response.data
        } catch (error) {
            let messageError = ''

            if (isAxiosError(error)) {
                console.log(error)

                const { response } = error
                const { data } = response || {}
                const { message } = data || {}

                messageError = message
            }

            return rejectWithValue(messageError)
        }
    }
)