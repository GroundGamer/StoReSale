import { getLoginStateIsLoading } from './getLoginStateIsLoading'


import { DeepPartial } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers'


describe('getLoginStateIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }

        expect(getLoginStateIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginStateIsLoading(state as StateSchema)).toEqual(false)
    })
})