import React from 'react'


import type { Props } from './AddCommentForm'


export const AddCommentFormLazy = React.lazy<React.FC<Props>>(() => new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500)
}))
