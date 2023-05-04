export interface AddCommentFormSchema {
    text: string
    error?: string | undefined
    isLoading?: boolean
}

export type KeysOfComment = 'text'