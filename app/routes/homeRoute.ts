import { Request, Response } from 'express'
import { fibonacciController } from '../controllers/homeController'

const pageRoute = (_req: Request, res: Response) => res.send('index.html')
const postRoute = (req: Request, res: Response) => fibonacciController(req, res)

export default {
  GET: pageRoute,
  POST: postRoute
}
