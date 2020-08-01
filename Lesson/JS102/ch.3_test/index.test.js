let repeat = require('./index.js');

describe('fixed test', () => {

    test('a * 3', () => {
        expect(repeat('a', 3)).toBe('aaa')
    })
    test('a * 0', () => {
        expect(repeat('a', 0)).toBe('')
    })
    test('0 * 3', () => {
        expect(repeat('', 3)).toBe('')
    })
})
