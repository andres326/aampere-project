import { validateVehicle } from '../schemas/vehicle.js'
import { VehicleModel } from '../models/vehicle.js'

export class VehicleController {
  static async getAll(req, res) {
    const vehicles = await VehicleModel.getAll()
    return res.json(vehicles)
  }

  static async getById(req, res) {
    const { id } = req.params
    const vehicle = await VehicleModel.get({ id })
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' })
    }
    return res.json(vehicle)
  }

  static async create(req, res) {
    const vehicleBody = validateVehicle(req.body)

    if (!vehicleBody.success) {
      return res.status(400).json(vehicleBody.error)
    }

    const vehicle = vehicleBody.data
    const newVehicle = await VehicleModel.create({ vehicle })
    return res.json(newVehicle)
  }

  static async update(req, res) {
    const vehicleBody = validateVehicle(req.body)

    if (!vehicleBody.success) {
      return res.status(400).json(vehicleBody.error)
    }

    const vehicle = vehicleBody.data
    const { id } = req.params

    const updatedVehicle = await VehicleModel.update({ id, vehicle })
    if (!updatedVehicle) {
      return res.status(404).json({ message: 'Vehicle not found' })
    }

    return res.json(updatedVehicle)
  }

  static async delete(req, res) {
    const { id } = req.params
    const vehicle = await VehicleModel.delete({ id })
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' })
    }
    return res.json({ message: 'Vehicle deleted' })
  }
}
