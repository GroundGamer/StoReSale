import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator, StoreDecorator } from 'shared/config/storybook'


import { LoginForm } from './LoginForm'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>


const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />


export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123'
    }
})]


export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123'
    }
})]


export const PrimaryLoading = Template.bind({})
PrimaryLoading.args = {}
PrimaryLoading.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true
    }
})]

export const PrimaryLoadingDark = Template.bind({})
PrimaryLoadingDark.args = {}
PrimaryLoadingDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true
    }
})]


export const PrimaryWithError = Template.bind({})
PrimaryWithError.args = {}
PrimaryWithError.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        error: 'Error for tests'
    }
})]

export const PrimaryWithErrorDark = Template.bind({})
PrimaryWithErrorDark.args = {}
PrimaryWithErrorDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        error: 'Error for tests'
    }
})]