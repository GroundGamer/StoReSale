import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Select } from './Select'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>


const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />


export const Primary = Template.bind({})
Primary.args = {
    label: 'Укажите значение',
    options: [
        {
            value: '1', content: 'Тест №1'
        },
        {
            value: '2', content: 'Тест №2'
        },
        {
            value: '3', content: 'Тест №3'
        }
    ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    label: 'Укажите значение',
    options: [
        {
            value: '1', content: 'Тест №1'
        },
        {
            value: '2', content: 'Тест №2'
        },
        {
            value: '3', content: 'Тест №3'
        }
    ]
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]