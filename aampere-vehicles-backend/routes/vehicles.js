import { Router } from 'express'
import { VehicleController } from '../controllers/vehicle.js'

export const createVehicleRouter = ({ vehicleModel }) => {
  const router = Router()

  const vehicleController = new VehicleController({ vehicleModel })

  router.get('/', vehicleController.get)

  router.get('/:id', vehicleController.getById)

  router.post('/', vehicleController.create)

  router.put('/:id', vehicleController.update)

  router.delete('/:id', vehicleController.delete)

  return router
}
