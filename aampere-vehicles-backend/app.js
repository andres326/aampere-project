import express, { json } from 'express'
import cors from 'cors'
import { vehicleRouter } from './routes/vehicles.js'

const app = express()
const port = process.env.PORT || 3000

app.use(json())
app.use(cors())

app.use('/vehicles', vehicleRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
