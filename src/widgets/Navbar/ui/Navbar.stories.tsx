import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Navbar } from 'widgets/Navbar'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Navbar>


const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />


export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(THEME.DARK)]