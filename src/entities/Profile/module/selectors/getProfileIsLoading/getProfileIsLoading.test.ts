import { getProfileIsLoading } from './getProfileIsLoading'


import type { StateSchema } from 'app/providers'


describe('getProfileIsLoading', () => {
    test('check and test isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
    })
})