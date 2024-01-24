import cors from 'cors'
import express from 'express'
import path from 'path'

const app = express()
const port = 3000

app.use(express.text())
app.use(express.static(path.join(__dirname, '../public')))
app.use(cors())

app.get('/', (req, res) => {
  return res.send('index.html')
})

app.post('/', (req, res) => {
  const input = req.query.input

  return res.send(input)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
