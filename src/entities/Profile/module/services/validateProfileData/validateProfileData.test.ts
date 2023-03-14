import { VALIDATE_PROFILE_ERROR } from '../../types/Profile'

import { validateProfileData } from './validateProfileData'


import { profileData } from 'entities/Profile/__mocks__/profileData'


describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(profileData)

        expect(result).toEqual([])
    })

    test('without first and lastname', async () => {
        const result = validateProfileData({ ...profileData, first: '', lastname: '' })

        expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA])
    })

    test('without username', async () => {
        const result = validateProfileData({ ...profileData, username: '' })

        expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORRECT_USERNAME])
    })

    test('without age', async () => {
        const result = validateProfileData({ ...profileData, age: undefined })

        expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORRECT_AGE])
    })

    test('without all data', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA,
            VALIDATE_PROFILE_ERROR.INCORRECT_USERNAME,
            VALIDATE_PROFILE_ERROR.INCORRECT_AGE
        ])
    })
})
