import React from 'react'

import { I18nextProvider } from 'react-i18next'

import { MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import  { StoreProvider } from 'app/providers'

import i18nForTests from 'shared/config/i18n/i18nForTests'


import type { DeepPartial } from '@reduxjs/toolkit'

import type { StateSchema } from 'app/providers'


export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: React.ReactNode, options: componentRenderOptions = {}) {

    const { route = '/' } = options || {}

    const { initialState } = options || {}



    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}