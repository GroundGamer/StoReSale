import { StoreProvider } from 'app/providers'


import type { DeepPartial } from '@reduxjs/toolkit'

import type { Story } from '@storybook/react'

import type { StateSchema } from 'app/providers'


export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    )
}