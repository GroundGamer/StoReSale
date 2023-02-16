import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { PageError } from 'widgets/PageError'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof PageError>


const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />


export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(THEME.DARK)]