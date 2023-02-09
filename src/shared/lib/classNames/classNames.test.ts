import { classNames } from './classNames'


describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {

        const expected = 'someClass class1 class2'

        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mode class', () => {

        const expected = 'someClass class1 class2 hovered selectable'

        expect(classNames('someClass', { hovered: true, selectable: true }, ['class1', 'class2'])).toBe(expected)
    })

    test('with selectable false', () => {

        const expected = 'someClass class1 class2 hovered'

        expect(classNames('someClass', { hovered: true, selectable: false }, ['class1', 'class2'])).toBe(expected)
    })

    test('with selectable undefined', () => {

        const expected = 'someClass class1 class2 hovered'

        expect(classNames('someClass', { hovered: true, selectable: undefined }, ['class1', 'class2'])).toBe(expected)
    })
})