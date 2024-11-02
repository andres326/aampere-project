import { Router } from 'express'
import { readFile } from '../utils.js'
import { validateVehicle } from '../schemas/vehicle.js'

const vehicles = readFile('./vehicles.json')

const router = Router()

router.get('/', (req, res) => {
  res.json(vehicles)
})

router.post('/', (req, res) => {
  const vehicle = validateVehicle(req.body)
  res.json(vehicle)
})

router.put('/:id', (req, res) => {
  const vehicle = validateVehicle(req.body)
  res.json(vehicle)
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'Vehicle deleted' })
})

export { router as vehicleRouter }
