import type { StateSchema } from 'app/providers'

export const getLoginStatePassword = (state: StateSchema) => state?.loginForm?.password || ''