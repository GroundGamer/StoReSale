import React from 'react'

import { THEME } from 'shared/lib'

import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'


import ProfilePage from './ProfilePage'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


import { profileData } from 'entities/Profile/__mocks__/profileData'


export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>


const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />


export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
    profile: {
        form: profileData
    }
})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    profile: {
        form: profileData
    }
})]
