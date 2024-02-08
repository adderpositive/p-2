import getFibonacciNumber from '../services/getFibonacciNumber'

test('getFibonacciNumber - testing fibonacci sequence', () => {
  expect(getFibonacciNumber(-1)).toBe(BigInt(0n))

  expect(getFibonacciNumber(0)).toBe(0n)
  expect(getFibonacciNumber(1)).toBe(1n)
  expect(getFibonacciNumber(10)).toBe(55n)
  expect(getFibonacciNumber(333)).toBe(
    1751455877444438095408940282208383549115781784912085789506677971125378n
  )
})
