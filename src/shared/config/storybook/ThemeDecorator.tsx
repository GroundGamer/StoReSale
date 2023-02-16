import { THEME } from 'shared/lib'


import type { Story } from '@storybook/react'


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
}