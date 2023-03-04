import { getLoginStatePassword } from './getLoginStatePassword'



import type { StateSchema } from 'app/providers'


describe('getLoginStatePassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123213'
            }
        }

        expect(getLoginStatePassword(state as StateSchema)).toEqual('123213')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginStatePassword(state as StateSchema)).toEqual('')
    })
})