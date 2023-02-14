import { render, screen } from '@testing-library/react'

import { Button } from 'shared/ui'

import { THEME_BUTTON } from './Button'

describe('Button',() => {
    test('Test render', () => {
        render(<Button>Test</Button>)

        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Test button with class clear', () => {
        render(<Button theme={THEME_BUTTON.CLEAR}>Test</Button>)

        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})