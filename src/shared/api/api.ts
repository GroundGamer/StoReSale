import axios from 'axios'

import { USER_LOCALSTORAGE_KEY } from 'shared/variables'


import type { AxiosError } from 'axios'


export const isAxiosError = (candidate: unknown): candidate is AxiosError => {
    return !!(candidate && typeof candidate === 'object' && 'isAxiosError' in candidate)
}

export const $API = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    }
})