import { createSlice } from '@reduxjs/toolkit'

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'


import type { PayloadAction } from '@reduxjs/toolkit'

import type { Article, ArticleDetailsSchema } from '../types/Article'


const initialState: ArticleDetailsSchema = {
    data: undefined,
    error: undefined,
    isLoading: false
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        }).addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false
            state.error = undefined
            state.data = action.payload
        }).addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
