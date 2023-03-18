import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import ArticlesPage from './ArticlesPage'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlesPage>


const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />


export const Primary = Template.bind({})
Primary.args = {
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]


export const Secondary = Template.bind({})
Secondary.args = {}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {}
SecondaryDark.decorators = [ThemeDecorator(THEME.DARK)]