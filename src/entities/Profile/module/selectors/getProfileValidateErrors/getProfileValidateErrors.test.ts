import { VALIDATE_PROFILE_ERROR } from '../../types/Profile'

import { getProfileValidateErrors } from './getProfileValidateErrors'


import type { StateSchema } from 'app/providers'


describe('getProfileValidateErrors', () => {
    test('check and test validateErrors list', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA,
                    VALIDATE_PROFILE_ERROR.INCORRECT_USERNAME,
                    VALIDATE_PROFILE_ERROR.INCORRECT_AGE,
                    VALIDATE_PROFILE_ERROR.NO_DATA
                ]
            }
        }

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA,
            VALIDATE_PROFILE_ERROR.INCORRECT_USERNAME,
            VALIDATE_PROFILE_ERROR.INCORRECT_AGE,
            VALIDATE_PROFILE_ERROR.NO_DATA
        ])
    })

    test('check and test validateErrors string', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: 'Error'
            }
        }

        expect(getProfileValidateErrors(state as StateSchema)).toEqual('Error')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})