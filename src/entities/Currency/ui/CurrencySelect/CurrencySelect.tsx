import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { Select } from 'shared/ui'

import { Currency } from '../../module/types/Currency'


interface Props {
    value?: Currency
    readOnly?: boolean
    className?: string
    onChange?: (value: Currency) => void
}

const options = [
    {
        value: Currency.RUB, content: Currency.RUB
    },
    {
        value: Currency.USD, content: Currency.USD
    },
    {
        value: Currency.EUR, content: Currency.EUR
    }
]

export const CurrencySelect = React.memo((props: Props) => {

    const { t } = useTranslation()


    const { className = '' } = props

    const { readOnly = false } = props

    const { value = Currency.RUB, onChange } = props


    const onChangeHandler = React.useCallback<(value: string) => void>((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])


    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Выбранная валюта')}
            value={value}
            onChange={onChangeHandler}
            options={options}
            readOnly={readOnly}
        />
    )
})
