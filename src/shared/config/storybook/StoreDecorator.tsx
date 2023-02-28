import { StoreProvider } from 'app/providers'

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'


import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'

import type { Story } from '@storybook/react'

import type { StateSchema } from 'app/providers'



const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    )
}