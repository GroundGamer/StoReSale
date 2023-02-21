import React from 'react'


import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'
import { Button, BUTTON_THEME, Modal } from 'shared/ui'

import cls from './Navbar.module.scss'


interface Props {
    className?: string
}

export const Navbar: React.FC<Props> = (props) => {

    const { className = '' } = props

    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = React.useState(false)

    const onToggleModal = React.useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                className={classNames(cls.links)}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam assumenda corporis eum fuga labore maiores maxime minus molestias, nemo, odit officiis tempore. Accusantium ad assumenda beatae culpa cum debitis delectus dicta doloremque ducimus incidunt ipsum iste laboriosam laborum magnam molestiae nemo neque nisi numquam odio optio praesentium provident quas quia quibusdam quidem quo, quos recusandae reiciendis rem saepe sapiente soluta tempora ullam vel vero vitae voluptatem. Ad dolor dolorum eos libero pariatur, porro quaerat repellendus repudiandae sit voluptates! Animi, aspernatur eius est illo inventore iste iusto laudantium magnam minus neque nihil nostrum optio perferendis quo sunt velit veritatis vero.')}
            </Modal>
        </div>
    )
}
