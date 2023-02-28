import type { StateSchema } from 'app/providers'

export const getLoginStateUsername = (state: StateSchema) => state?.loginForm?.username || ''