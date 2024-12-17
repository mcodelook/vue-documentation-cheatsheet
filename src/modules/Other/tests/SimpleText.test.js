// SimpleTest.test.js
import { render } from '@testing-library/vue'
import SimpleTest from './SimpleTest.vue'

test('it should display the simple test text', () => {
    const { getByText } = render(SimpleTest)

    expect(getByText('Simple test')).toBeTruthy()
    // Or
    // expect(getByText('Simple test')).to.exist
})
