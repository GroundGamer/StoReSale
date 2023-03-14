import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'

import { ProfileCard } from './ProfileCard'

import TestAvatar from 'shared/assets/tests/test_avatar.jpg'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


import { profileData } from 'entities/Profile/__mocks__/profileData'


export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>


const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />


export const Primary = Template.bind({})
Primary.args = {
    data: { ...profileData, avatar: TestAvatar }
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    data: { ...profileData, avatar: TestAvatar }
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const WithError = Template.bind({})
WithError.args = {
    error: 'true'
}

export const WithErrorDark = Template.bind({})
WithErrorDark.args = {
    error: 'true'
}
WithErrorDark.decorators = [ThemeDecorator(THEME.DARK)]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}

export const LoadingDark = Template.bind({})
LoadingDark.args = {
    isLoading: true
}
LoadingDark.decorators = [ThemeDecorator(THEME.DARK)]