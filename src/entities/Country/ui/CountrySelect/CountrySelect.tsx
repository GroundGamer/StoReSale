import React from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'

import { Select } from 'shared/ui'

import { Country } from '../../module/types/Country'


interface Props {
    className?: string
}


interface Props {
    value?: Country
    readOnly?: boolean
    className?: string
    onChange?: (value: Country) => void
}

const options = [
    {
        value: Country.Armenia, content: Country.Armenia
    },
    {
        value: Country.Belarus, content: Country.Belarus
    },
    {
        value: Country.Kazakhstan, content: Country.Kazakhstan
    },
    {
        value: Country.Russia, content: Country.Russia
    }
]

export const CountrySelect = React.memo((props: Props) => {

    const { t } = useTranslation()


    const { className = '' } = props

    const { readOnly = false } = props

    const { value = Country.Russia, onChange } = props


    const onChangeHandler = React.useCallback<(value: string) => void>((value: string) => {
        onChange?.(value as Country)
    }, [onChange])


    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Выбранная страна')}
            value={value}
            onChange={onChangeHandler}
            options={options}
            readOnly={readOnly}
        />
    )
})
