import getFibonacciNumber from './getFibonacciNumber'

test('getFibonacciNumber - testing fibonacci sequence', () => {
  expect(getFibonacciNumber(-1)).toBe(NaN)
  expect(getFibonacciNumber(0)).toBe(0)
  expect(getFibonacciNumber(1)).toBe(1)
  expect(getFibonacciNumber(10)).toBe(55)
  expect(getFibonacciNumber(17)).toBe(1597)
})
