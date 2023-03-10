import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import AboutPage from './AboutPage'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AboutPage>


const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />


export const Primary = Template.bind({})
Primary.args = {
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]