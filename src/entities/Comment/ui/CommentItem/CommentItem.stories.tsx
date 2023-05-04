import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { CommentItem } from './CommentItem'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentItem>


const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />


export const Primary = Template.bind({})
Primary.args = {
    comment: {
        id: '1',
        text: 'Hello world 1',
        user: { id: '1', username: 'Vasya' }
    }
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    comment: {
        id: '1',
        text: 'Hello world 1',
        user: { id: '1', username: 'Vasya' }
    }
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}

export const LoadingDark = Template.bind({})
LoadingDark.args = {
    isLoading: true
}
LoadingDark.decorators = [ThemeDecorator(THEME.DARK)]