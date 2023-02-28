import React from 'react'


import type { Props } from './LoginForm'


export const LoginFormLazy = React.lazy<React.FC<Props>>(() => new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500)
}))
