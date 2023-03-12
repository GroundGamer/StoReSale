import { isAxiosError } from 'shared/api'


export const getAPIErrorMessage = (error: unknown) => {
    let messageError = ''

    if (isAxiosError(error)) {
        console.log(error)

        const { response } = error
        const { data } = response || {}
        const { message } = data || {}

        messageError = message
    }

    return messageError
}