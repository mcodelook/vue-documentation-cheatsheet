import { useCounter } from '../../core/composables/useCounter'

describe('useCounter composable', () => {
    test('initializes with 0 by default', () => {
        const { count, increment } = useCounter()
        expect(count.value).toBe(0)

        increment()
        expect(count.value).toBe(1)
    })

    test('accepts initial value', () => {
        const { count, decrement } = useCounter(10)
        expect(count.value).toBe(10)

        decrement()
        expect(count.value).toBe(9)
    })
})
