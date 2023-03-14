import React from 'react'

import { classNames } from 'shared/lib'
import { Mods } from 'shared/lib/classNames/classNames'


import cls from './Input.module.scss'


type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'autoFocus' | 'readOnly'>

interface Props extends HTMLInputProps {
    className?: string
    value: string | number | undefined
    autoFocus?: boolean
    onChange?: (value: string) => void
    readOnly?: boolean
}

export const Input = React.memo((props: Props) => {

    const { className = '' } = props

    const {
        type = 'text',
        value,
        onChange,
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props


    const refInput = React.useRef<HTMLInputElement>(null)

    const [isFocused, setIsFocused] = React.useState(false)

    const [caretPosition, setCaretPosition] = React.useState(0)


    const mods = React.useMemo<Mods>(() => {
        return {
            [cls.readonly]: readOnly
        }
    }, [readOnly])


    const isCaretVisible = React.useMemo(() => isFocused && !readOnly, [isFocused, readOnly])


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value = '' } = event.target || {}

        onChange?.(value)

        setCaretPosition(value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (event: any) => {
        const { selectionStart } = event.target || {}

        setCaretPosition(selectionStart || 0)
    }


    React.useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            refInput.current?.focus()
        }
    }, [autoFocus])




    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>

            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}:>`}
                </div>
            )}

            <div className={cls.caretWrapper}>
                <input
                    readOnly={readOnly}
                    ref={refInput}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>

        </div>
    )
})
