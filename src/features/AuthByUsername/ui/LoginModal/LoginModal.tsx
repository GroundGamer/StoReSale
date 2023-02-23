import React from 'react'

import { classNames } from 'shared/lib'

import { Modal } from 'shared/ui'

import { LoginForm } from '../LoginForm/LoginForm'


import cls from './LoginModal.module.scss'


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
            className={classNames(cls.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm/>
        </Modal>
    )
}
