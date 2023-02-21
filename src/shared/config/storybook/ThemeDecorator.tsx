import { THEME } from 'shared/lib'

import { ThemeProvider } from 'app/providers'


import type { Story } from '@storybook/react'


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}