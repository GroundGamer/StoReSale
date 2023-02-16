import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { PageLoader } from 'widgets/PageLoader'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof PageLoader>


const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />


export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]