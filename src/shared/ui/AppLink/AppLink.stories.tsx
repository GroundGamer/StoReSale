import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { APP_LINK_THEME, AppLink } from 'shared/ui'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>


const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />


export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    theme: APP_LINK_THEME.PRIMARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    theme: APP_LINK_THEME.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]


export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Text',
    theme: APP_LINK_THEME.SECONDARY
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'Text',
    theme: APP_LINK_THEME.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(THEME.DARK)]