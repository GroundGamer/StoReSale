import React from 'react'

import { Loader, Modal } from 'shared/ui'

import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'


interface Props {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: React.FC<Props> = (props) => {

    const { className = '' } = props

    const { isOpen, onClose } = props


    return (
        <Modal
            lazy
            className={className}
            isOpen={isOpen}
            onClose={onClose}
        >
            <React.Suspense fallback={<Loader />}>
                <LoginFormLazy/>
            </React.Suspense>
        </Modal>
    )
}
