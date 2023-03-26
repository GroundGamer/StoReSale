import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { fetchCommentsByArticleId } from 'features/ArticleCommentList'


import type { PayloadAction } from '@reduxjs/toolkit'

import type { ArticleCommentsSchema } from 'features/ArticleCommentList'

import type { Comment } from 'entities/Comment'


export const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
})

const articleCommentsSlice = createSlice({
    name: 'articleCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        }).addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Array<Comment>>) => {
            state.isLoading = false
            state.error = undefined
            commentsAdapter.setAll(state, action.payload)
        }).addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { actions: articleCommentsActions, reducer: articleCommentsReducer } = articleCommentsSlice
