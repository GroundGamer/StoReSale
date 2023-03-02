import React from 'react'

import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'shared/lib'

import { Button } from 'shared/ui'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

import { counterActions } from '../model/slice/counterSlice'


export const Counter = () => {

    const { t } = useTranslation()

    const dispatch = useAppDispatch()

    const counterValue = useSelector(getCounterValue)


    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }


    return (
        <div>
            <h1 data-testid={'value-title'}>{counterValue}</h1>
            <Button data-testid={'increment-btn'} onClick={increment}>
                {t('Increment')}
            </Button>
            <Button data-testid={'decrement-btn'} onClick={decrement}>
                {t('Decrement')}
            </Button>
        </div>
    )
}
