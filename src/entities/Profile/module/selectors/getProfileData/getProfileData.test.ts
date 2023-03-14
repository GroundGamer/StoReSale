import { getProfileData } from './getProfileData'


import type { StateSchema } from 'app/providers'


import { profileData } from '../../../__mocks__/profileData'


describe('getProfileData', () => {
    test('check and test profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileData
            }
        }

        expect(getProfileData(state as StateSchema)).toEqual(profileData)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})