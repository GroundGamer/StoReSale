import { fireEvent, screen } from '@testing-library/react'

import { Sidebar } from 'widgets'

import { renderWithTranslations } from 'shared/lib'


describe('Sidebar',() => {
    test('Test render', () => {
        renderWithTranslations(<Sidebar />)

        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test toggle true', () => {
        renderWithTranslations(<Sidebar />)

        const toggleBtn = screen.getByTestId('sidebar-toggle')

        expect(screen.getByTestId('sidebar')).toBeInTheDocument()

        fireEvent.click(toggleBtn)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})