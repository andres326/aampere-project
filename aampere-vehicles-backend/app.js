import express, { json } from 'express'
import cors from 'cors'
import { createVehicleRouter } from './routes/vehicles.js'
import { errorHandler } from './middlewares/error.js'

export const createApp = ({ vehicleModel }) => {
  const app = express()
  const port = process.env.PORT || 3000

  app.use(json())
  app.use(cors())

  app.use('/vehicles', createVehicleRouter({ vehicleModel }))

  app.use(errorHandler)
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}
