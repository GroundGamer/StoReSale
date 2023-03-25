import { StoreProvider } from 'app/providers'

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

import { profileReducer } from 'entities/Profile/module/slice/profileSlice'

import { articleDetailsReducer } from 'entities/Article/module/slice/articleDetailsSlice'



import type { Story } from '@storybook/react'

import type { StateSchema } from 'app/providers'

import type { ReducersList } from 'shared/lib'



const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    )
}