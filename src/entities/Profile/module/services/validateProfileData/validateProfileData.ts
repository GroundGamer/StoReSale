import { VALIDATE_PROFILE_ERROR } from '../../types/Profile'

import type { Profile } from '../../types/Profile'


export const validateProfileData = (profile?: Profile) => {

    if (!profile) {
        return [VALIDATE_PROFILE_ERROR.NO_DATA]
    }

    const {
        first,
        lastname,
        age,
        username
    } = profile

    const validatedErrors: Array<VALIDATE_PROFILE_ERROR> = []

    if (!first || !lastname) {
        validatedErrors.push(VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA)
    }

    if (!username) {
        validatedErrors.push(VALIDATE_PROFILE_ERROR.INCORRECT_USERNAME)
    }

    if (!age || !Number.isInteger(age)) {
        validatedErrors.push(VALIDATE_PROFILE_ERROR.INCORRECT_AGE)
    }

    return validatedErrors
}