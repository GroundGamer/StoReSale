import React from 'react'

import { Modal } from 'shared/ui'

import { LoginForm } from '../LoginForm/LoginForm'


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
            <LoginForm/>
        </Modal>
    )
}
