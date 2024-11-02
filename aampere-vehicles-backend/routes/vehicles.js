import { Router } from 'express'
import { VehicleController } from '../controllers/vehicle.js'

const router = Router()

router.get('/', VehicleController.getAll)

router.get('/:id', VehicleController.getById)

router.post('/', VehicleController.create)

router.put('/:id', VehicleController.update)

router.delete('/:id', VehicleController.delete)

export { router as vehicleRouter }
