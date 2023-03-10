import { addDecorator } from '@storybook/react'

import { THEME } from '../../src/shared/lib'

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'


export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator(ThemeDecorator(THEME.LIGHT))