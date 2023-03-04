import { getLoginStateUsername } from './getLoginStateUsername'



import type { StateSchema } from 'app/providers'


describe('getLoginStateUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin'
            }
        }

        expect(getLoginStateUsername(state as StateSchema)).toEqual('admin')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginStateUsername(state as StateSchema)).toEqual('')
    })
})