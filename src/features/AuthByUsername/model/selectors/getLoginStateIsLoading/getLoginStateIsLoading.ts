import type { StateSchema } from 'app/providers'

export const getLoginStateIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false