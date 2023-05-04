import { createSlice } from '@reduxjs/toolkit'


import type { PayloadAction } from '@reduxjs/toolkit'

import type { DataWrapperInput } from 'shared/module'

import type { KeysOfComment, AddCommentFormSchema } from '../types/AddCommentForm'


const initialState: AddCommentFormSchema = {
    text: '',
    isLoading: false,
    error: undefined
}

const addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<DataWrapperInput<KeysOfComment, string>>) => {
            const { field, value } = action.payload

            state[field] = String(value)
        }
    }
    /*extraReducers: (builder) => {
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
    }*/
})

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer
} = addCommentFormSlice
