import type { StateSchema } from 'app/providers'

export const getLoginStateError = (state: StateSchema) => state?.loginForm?.error || ''