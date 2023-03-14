import { getProfileForm } from './getProfileForm'


import type { StateSchema } from 'app/providers'


import { profileData } from '../../../__mocks__/profileData'


describe('getProfileForm', () => {
    test('check and test form data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profileData
            }
        }

        expect(getProfileForm(state as StateSchema)).toEqual(profileData)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})