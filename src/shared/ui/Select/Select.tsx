import React from 'react'

import { classNames } from 'shared/lib'


import cls from './Select.module.scss'


import type { Mods } from 'shared/lib/classNames/classNames'


export interface SelectOption {
    value: string
    content: string
}

interface Props {
    className?: string
    label?: string
    readOnly?: boolean
    options?: Array<SelectOption>
    value?: string
    onChange?: (value: string) => void
}

export const Select = React.memo((props: Props) => {

    const { className = '' } = props

    const { label = '' } = props

    const { readOnly = false } = props

    const { options = []} = props

    const { value, onChange } = props


    const optionsList = React.useMemo<Array<JSX.Element>>(() => {
        return options.map(item => (
            <option
                key={item.value}
                value={item.value}
                className={cls.option}
            >
                {item.content}
            </option>
        ))
    }, [options])


    const mods = React.useMemo<Mods>(() => {
        return {}
    }, [])


    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event?.currentTarget || {}

        onChange?.(value)
    }



    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && (
                <span
                    className={classNames(cls.label, { [cls.editing]: readOnly }, [])}
                >
                    {`${label}:`}
                </span>
            )}

            <select
                disabled={readOnly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    )
})
