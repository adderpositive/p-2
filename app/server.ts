import cors from 'cors'
import express from 'express'
import path from 'path'
import getFibonacciNumber from './lib/getFibonacciNumber'

const app = express()
const port = 3000

app.use(express.text())
app.use(express.static(path.join(__dirname, '../public')))
app.use(cors())

app.get('/', (req, res) => {
  return res.send('index.html')
})

app.post('/', (req, res) => {
  const input =
    req.query.input && typeof req.query.input === 'string'
      ? parseInt(req.query.input, 10)
      : null

  if (input === null || input < 0) {
    return res.send('Not valid input')
  }

  const fibonacciNumber = getFibonacciNumber(input)

  return res.send(fibonacciNumber.toString())
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
