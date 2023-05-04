import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { CommentList } from './CommentList'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>


const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />


export const Primary = Template.bind({})
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world 1',
            user: { id: '1', username: 'Vasya' }
        },
        {
            id: '2',
            text: 'Hello world 2',
            user: { id: '2', username: 'User' }
        },
        {
            id: '3',
            text: 'Hello world 3',
            user: { id: '1', username: 'Vasya' }
        }
    ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world 1',
            user: { id: '1', username: 'Vasya' }
        },
        {
            id: '2',
            text: 'Hello world 2',
            user: { id: '2', username: 'User' }
        },
        {
            id: '3',
            text: 'Hello world 3',
            user: { id: '1', username: 'Vasya' }
        }
    ]
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