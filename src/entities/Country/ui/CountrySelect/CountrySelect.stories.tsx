import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { CountrySelect } from './CountrySelect'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CountrySelect>


const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />


export const Primary = Template.bind({})
Primary.args = {
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]