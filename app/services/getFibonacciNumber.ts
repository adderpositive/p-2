export const getFibonacciNumber = (input: number): bigint => {
  if (input < 0) return 0n

  const sequence: bigint[] = [0n, 1n] // F0, F1

  for (let i = 2; i <= input; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }

  return BigInt(sequence[input])
}

export default getFibonacciNumber
