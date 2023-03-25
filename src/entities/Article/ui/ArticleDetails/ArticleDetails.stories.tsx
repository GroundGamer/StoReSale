import React from 'react'

import { THEME } from 'shared/lib'

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'


import { articleData } from '../../__mocks__/articleData'

import { ArticleDetails } from './ArticleDetails'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleDetails>


const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />


export const Primary = Template.bind({})
Primary.args = {
}
Primary.decorators = [StoreDecorator({
    articleDetails: {
        data: articleData
    }
})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    articleDetails: {
        data: articleData
    }
})]


export const IsLoading = Template.bind({})
IsLoading.args = {}
IsLoading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true
    }
})]

export const IsLoadingDark = Template.bind({})
IsLoadingDark.args = {}
IsLoadingDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    articleDetails: {
        isLoading: true
    }
})]


export const Error = Template.bind({})
Error.args = {}
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'true'
    }
})]

export const ErrorDark = Template.bind({})
ErrorDark.args = {}
ErrorDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    articleDetails: {
        error: 'true'
    }
})]