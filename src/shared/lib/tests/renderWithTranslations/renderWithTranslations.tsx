import React from 'react'

import { I18nextProvider } from 'react-i18next'

import { render } from '@testing-library/react'

import { i18nForTests } from 'shared/config'


export function renderWithTranslations(component: React.ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>
    )
}