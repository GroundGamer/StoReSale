import { getProfileReadOnly } from './getProfileReadOnly'


import type { StateSchema } from 'app/providers'


describe('getProfileReadOnly', () => {
    test('check and test readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        }

        expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
    })
})