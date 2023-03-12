import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { CurrencySelect } from './CurrencySelect'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CurrencySelect>


const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />


export const Primary = Template.bind({})
Primary.args = {
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]