import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Skeleton } from './Skeleton'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Skeleton>


const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />


export const Primary = Template.bind({})
Primary.args = {
    width: '100%',
    height: 200
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    width: '100%',
    height: 200
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]


export const Circle = Template.bind({})
Circle.args = {
    border: '50%',
    height: 100,
    width: 100
}

export const CircleDark = Template.bind({})
CircleDark.args = {
    border: '50%',
    height: 100,
    width: 100
}
CircleDark.decorators = [ThemeDecorator(THEME.DARK)]