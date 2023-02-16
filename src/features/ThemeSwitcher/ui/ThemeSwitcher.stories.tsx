import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { ThemeSwitcher } from 'features/ThemeSwitcher'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>


const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />


export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]