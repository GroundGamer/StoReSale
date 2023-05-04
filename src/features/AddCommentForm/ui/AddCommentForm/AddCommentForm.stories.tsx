import React from 'react'

import { action } from '@storybook/addon-actions'

import { THEME } from 'shared/lib'

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'

import AddCommentForm from './AddCommentForm'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AddCommentForm>


const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />


export const Primary = Template.bind({})
Primary.args = {
    onSendComment: action('onSendComment')
}
Primary.decorators = [StoreDecorator({})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    onSendComment: action('onSendComment')
}
PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]