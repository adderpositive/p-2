import { Request, Response } from 'express'
import getFibonacciNumber from '../services/getFibonacciNumber'

export const fibonacciController = (req: Request, res: Response) => {
  const input =
    req.query.input && typeof req.query.input === 'string'
      ? parseInt(req.query.input, 10)
      : null

  if (input === null || input < 0) {
    return res.status(400).send('Not valid input')
  }

  const fibonacciNumber = getFibonacciNumber(input)

  return res.status(200).send(fibonacciNumber.toString())
}
