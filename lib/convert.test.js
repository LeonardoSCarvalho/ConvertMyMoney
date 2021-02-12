const convert = require('./convert');

test('convert 4 to 4', () => {
    expect(convert(4,4)).toBe(16.00)
})

test('convert 0 to 5', () => {
    expect(convert(0,5)).toBe(0)
})