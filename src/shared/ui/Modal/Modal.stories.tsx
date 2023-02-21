import React from 'react'

import { THEME } from 'shared/lib'

import { ThemeDecorator } from 'shared/config/storybook'


import { Modal } from 'shared/ui'


import type { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>


const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />


export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam assumenda corporis eum fuga labore maiores maxime minus molestias, nemo, odit officiis tempore. Accusantium ad assumenda beatae culpa cum debitis delectus dicta doloremque ducimus incidunt ipsum iste laboriosam laborum magnam molestiae nemo neque nisi numquam odio optio praesentium provident quas quia quibusdam quidem quo, quos recusandae reiciendis rem saepe sapiente soluta tempora ullam vel vero vitae voluptatem. Ad dolor dolorum eos libero pariatur, porro quaerat repellendus repudiandae sit voluptates! Animi, aspernatur eius est illo inventore iste iusto laudantium magnam minus neque nihil nostrum optio perferendis quo sunt velit veritatis vero.'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam assumenda corporis eum fuga labore maiores maxime minus molestias, nemo, odit officiis tempore. Accusantium ad assumenda beatae culpa cum debitis delectus dicta doloremque ducimus incidunt ipsum iste laboriosam laborum magnam molestiae nemo neque nisi numquam odio optio praesentium provident quas quia quibusdam quidem quo, quos recusandae reiciendis rem saepe sapiente soluta tempora ullam vel vero vitae voluptatem. Ad dolor dolorum eos libero pariatur, porro quaerat repellendus repudiandae sit voluptates! Animi, aspernatur eius est illo inventore iste iusto laudantium magnam minus neque nihil nostrum optio perferendis quo sunt velit veritatis vero.'
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]