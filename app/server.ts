import cors from 'cors'
import express from 'express'
import path from 'path'
import routeHome from './routes/homeRoute'

const app = express()
const port = 3000

app.use(express.text())
app.use(express.static(path.join(__dirname, '../public')))
app.use(cors())

app.route('/').get(routeHome.GET).post(routeHome.POST)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
