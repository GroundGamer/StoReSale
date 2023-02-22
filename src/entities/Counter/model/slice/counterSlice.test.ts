import { counterReducer, counterActions } from './counterSlice'


import type { CounterSchema } from '../types/CounterSchema'


describe('counterSlice', () => {
    test('Decrement', () => {

        const state: CounterSchema = { value: 10 }

        expect(
            counterReducer(state, counterActions.decrement)
        ).toEqual({ value: 9 })
    })

    test('Increment', () => {

        const state: CounterSchema = { value: 10 }

        expect(
            counterReducer(state, counterActions.increment)
        ).toEqual({ value: 11 })
    })

    test('Increment by undefined', () => {

        expect(
            counterReducer(undefined, counterActions.increment)
        ).toEqual({ value: 1 })
    })
})