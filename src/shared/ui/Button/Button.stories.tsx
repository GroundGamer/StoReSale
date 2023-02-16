import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Button, THEME_BUTTON } from './Button'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />



export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text'
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]




export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: THEME_BUTTON.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: THEME_BUTTON.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(THEME.DARK)]




export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: THEME_BUTTON.CLEAR
}

export const ClearDark = Template.bind({})
ClearDark.args = {
    children: 'Text',
    theme: THEME_BUTTON.CLEAR
}
ClearDark.decorators = [ThemeDecorator(THEME.DARK)]