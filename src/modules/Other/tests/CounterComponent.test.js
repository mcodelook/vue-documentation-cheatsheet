import { mount } from '@vue/test-utils'
import CounterComponent from './CounterComponent.vue'

describe('CounterComponent', () => {
    test('renders and interacts correctly', async () => {
        const wrapper = mount(CounterComponent)

        // Check initial state
        expect(wrapper.find('[data-testid="count"]').text()).toBe('0')

        // Test increment
        await wrapper.find('[data-testid="increment"]').trigger('click')
        expect(wrapper.find('[data-testid="count"]').text()).toBe('1')

        // Test decrement
        await wrapper.find('[data-testid="decrement"]').trigger('click')
        expect(wrapper.find('[data-testid="count"]').text()).toBe('0')
    })
})
