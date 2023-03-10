import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Input } from './Input'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Input>


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />


export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Type text',
    value: '+1234567890'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    placeholder: 'Type text',
    value: '+1234567890'
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]