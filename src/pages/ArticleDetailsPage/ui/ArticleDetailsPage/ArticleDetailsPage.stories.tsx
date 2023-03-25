import React from 'react'

import { THEME } from 'shared/lib'

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'

import { articleData } from 'entities/Article/__mocks__/articleData'

import ArticleDetailsPage from './ArticleDetailsPage'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleDetailsPage>


const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />


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