import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Text, TEXT_SIZE, TEXT_THEME } from './Text'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>


const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />


export const Primary = Template.bind({})
Primary.args = {
    title: 'Primary blablablablablablablablablablablablablablablabla'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Primary blablablablablablablablablablablablablablablabla'
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]


export const PrimaryError = Template.bind({})
PrimaryError.args = {
    theme: TEXT_THEME.ERROR,
    title: 'Primary blablablablablablablablablablablablablablablabla'
}

export const PrimaryErrorDark = Template.bind({})
PrimaryErrorDark.args = {
    theme: TEXT_THEME.ERROR,
    title: 'Primary blablablablablablablablablablablablablablablabla'
}
PrimaryErrorDark.decorators = [ThemeDecorator(THEME.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
    size: TEXT_SIZE.L,
    title: 'Primary blablablablablablablablablablablablablablablabla',
    text: 'Primary blablablablablablablablablablablablablablablabla'
}

export const SizeLDark = Template.bind({})
SizeLDark.args = {
    size: TEXT_SIZE.L,
    title: 'Primary blablablablablablablablablablablablablablablabla',
    text: 'Primary blablablablablablablablablablablablablablablabla'
}
SizeLDark.decorators = [ThemeDecorator(THEME.DARK)]


export const Secondary = Template.bind({})
Secondary.args = {
    text: 'Primary blablablablablablablabla'
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    text: 'Primary blablablablablablablabla'
}
SecondaryDark.decorators = [ThemeDecorator(THEME.DARK)]


export const SecondaryError = Template.bind({})
SecondaryError.args = {
    text: 'Primary blablablablablablablabla',
    theme: TEXT_THEME.ERROR
}

export const SecondaryErrorDark = Template.bind({})
SecondaryErrorDark.args = {
    text: 'Primary blablablablablablablabla',
    theme: TEXT_THEME.ERROR
}
SecondaryErrorDark.decorators = [ThemeDecorator(THEME.DARK)]


export const General = Template.bind({})
General.args = {
    text: 'Primary blablablablablablablabla',
    title: 'Primary blablablablablablablabla'
}

export const GeneralDark = Template.bind({})
GeneralDark.args = {
    text: 'Primary blablablablablablablabla',
    title: 'Primary blablablablablablablabla'
}
GeneralDark.decorators = [ThemeDecorator(THEME.DARK)]