import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Code } from './Code'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Code>


const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />


const TEXT_TEMPLATE = 'import React from \'react\'\n'
    + '\n'
    + 'import { THEME } from \'shared/lib\'\n'
    + '\n'
    + 'import { ThemeDecorator } from \'shared/config/storybook\'\n'
    + '\n'
    + '\n'
    + 'import { Code } from \'./Code\'\n'
    + '\n'
    + '\n'
    + 'import type { ComponentMeta, ComponentStory } from \'@storybook/react\'\n'
    + '\n'
    + '\n'
    + 'export default {\n'
    + '    title: \'shared/Code\',\n'
    + '    component: Code,\n'
    + '    argTypes: {\n'
    + '        backgroundColor: { control: \'color\' }\n'
    + '    }\n'
    + '} as ComponentMeta<typeof Code>\n'
    + '\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />'


export const Primary = Template.bind({})
Primary.args = {
    text: TEXT_TEMPLATE
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    text: TEXT_TEMPLATE
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]
