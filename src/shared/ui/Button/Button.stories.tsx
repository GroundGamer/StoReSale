import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Button, BUTTON_SIZE, BUTTON_THEME } from './Button'


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



export const OutlineSizeM = Template.bind({})
OutlineSizeM.args = {
    children: 'Text',
    theme: BUTTON_THEME.OUTLINE,
    size: BUTTON_SIZE.M
}

export const OutlineSizeMDark = Template.bind({})
OutlineSizeMDark.args = {
    children: 'Text',
    theme: BUTTON_THEME.OUTLINE,
    size: BUTTON_SIZE.M
}
OutlineSizeMDark.decorators = [ThemeDecorator(THEME.DARK)]



export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    children: 'Text',
    theme: BUTTON_THEME.OUTLINE,
    size: BUTTON_SIZE.L
}

export const OutlineSizeLDark = Template.bind({})
OutlineSizeLDark.args = {
    children: 'Text',
    theme: BUTTON_THEME.OUTLINE,
    size: BUTTON_SIZE.L
}
OutlineSizeLDark.decorators = [ThemeDecorator(THEME.DARK)]



export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
    children: 'Text',
    theme: BUTTON_THEME.OUTLINE,
    size: BUTTON_SIZE.XL
}

export const OutlineSizeXLDark = Template.bind({})
OutlineSizeXLDark.args = {
    children: 'Text',
    theme: BUTTON_THEME.OUTLINE,
    size: BUTTON_SIZE.XL
}
OutlineSizeXLDark.decorators = [ThemeDecorator(THEME.DARK)]



export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
    children: 'Text',
    theme: BUTTON_THEME.BACKGROUND
}

export const BackgroundThemeDark = Template.bind({})
BackgroundThemeDark.args = {
    children: 'Text',
    theme: BUTTON_THEME.BACKGROUND
}
BackgroundThemeDark.decorators = [ThemeDecorator(THEME.DARK)]



export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}

export const BackgroundInvertedThemeDark = Template.bind({})
BackgroundInvertedThemeDark.args = {
    children: 'Text',
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}
BackgroundInvertedThemeDark.decorators = [ThemeDecorator(THEME.DARK)]



export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
    children: '>',
    square: true,
    size: BUTTON_SIZE.M,
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}

export const SquareSizeMDark = Template.bind({})
SquareSizeMDark.args = {
    children: '>',
    square: true,
    size: BUTTON_SIZE.M,
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}
SquareSizeMDark.decorators = [ThemeDecorator(THEME.DARK)]



export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
    children: '>',
    square: true,
    size: BUTTON_SIZE.L,
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}

export const SquareSizeLDark = Template.bind({})
SquareSizeLDark.args = {
    children: '>',
    square: true,
    size: BUTTON_SIZE.L,
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}
SquareSizeLDark.decorators = [ThemeDecorator(THEME.DARK)]



export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
    children: '>',
    square: true,
    size: BUTTON_SIZE.XL,
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}

export const SquareSizeXLDark = Template.bind({})
SquareSizeXLDark.args = {
    children: '>',
    square: true,
    size: BUTTON_SIZE.XL,
    theme: BUTTON_THEME.BACKGROUND_INVERTED
}
SquareSizeXLDark.decorators = [ThemeDecorator(THEME.DARK)]



export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: BUTTON_THEME.CLEAR
}

export const ClearDark = Template.bind({})
ClearDark.args = {
    children: 'Text',
    theme: BUTTON_THEME.CLEAR
}
ClearDark.decorators = [ThemeDecorator(THEME.DARK)]



export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Text',
    disabled: true,
    theme: BUTTON_THEME.OUTLINE
}

export const DisabledDark = Template.bind({})
DisabledDark.args = {
    children: 'Text',
    disabled: true,
    theme: BUTTON_THEME.OUTLINE
}
DisabledDark.decorators = [ThemeDecorator(THEME.DARK)]