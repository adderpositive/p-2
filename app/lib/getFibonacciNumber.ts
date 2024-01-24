export const getFibonacciNumber = (input: number): number => {
  if (input < 0) return NaN

  const sequence = [0, 1] // F0, F1

  for (let i = 2; i <= input; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }

  return sequence[input]
}

export default getFibonacciNumber
