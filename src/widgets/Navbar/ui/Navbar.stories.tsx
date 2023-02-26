import React from 'react'

import { THEME } from 'shared/lib'

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'


import { Navbar } from 'widgets/Navbar'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Navbar>


const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />


export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({})]


export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]


export const IsAuth = Template.bind({})
IsAuth.args = {}
IsAuth.decorators = [StoreDecorator({
    user: { authData: {}}
})]


export const IsAuthDark = Template.bind({})
IsAuthDark.args = {}
IsAuthDark.decorators = [StoreDecorator({
    user: { authData: {}}
}), ThemeDecorator(THEME.DARK)]