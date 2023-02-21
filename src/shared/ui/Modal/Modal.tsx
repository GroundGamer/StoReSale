import React from 'react'

import { classNames, useTheme } from 'shared/lib'

import { Portal } from 'shared/ui'


import cls from './Modal.module.scss'


interface Props {
    className?: string
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}


const ANIMATION_DELAY = 300


export const Modal: React.FC<Props> = (props) => {

    const { className = '' } = props

    const { children } = props

    const { isOpen = false, onClose } = props

    const { theme } = useTheme()

    const [isClosing, setIsClosing] = React.useState<boolean>(false)


    const timerRef = React.useRef<ReturnType<typeof setTimeout>>()


    const mods = React.useMemo<Record<string, boolean>>(() => {
        return {
            [cls.opened]: isOpen,
            [cls.isClosing]: isClosing,
            [cls[theme]]: true
        }
    }, [isOpen, isClosing, theme])

    const handleClose = React.useCallback(() => {
        if (onClose) {
            setIsClosing(true)

            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])


    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }


    const onKeyDown = React.useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose()
        }
    }, [handleClose])


    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)

            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])


    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
