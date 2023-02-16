import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { NotFoundPage } from 'pages/NotFoundPage'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotFoundPage>


const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />


export const Primary = Template.bind({})
Primary.args = {
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]