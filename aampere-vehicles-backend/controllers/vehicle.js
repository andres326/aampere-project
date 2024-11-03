import { validateVehicle } from '../schemas/vehicle.js'
import { errors } from '../utils/constants.js'

export class VehicleController {
  constructor({ vehicleModel }) {
    this.vehicleModel = vehicleModel
  }

  get = async (req, res, next) => {
    try {
      const { limit } = req.query
      const vehicles = await this.vehicleModel.get({ limit })
      return res.json(vehicles)
    } catch (error) {
      next({ name: errors.DB_ERROR, error })
    }
  }

  getById = async (req, res, next) => {
    const { id } = req.params
    try {
      const vehicle = await this.vehicleModel.getById({ id })
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' })
      }
      return res.json(vehicle)
    } catch (error) {
      next({ name: errors.DB_ERROR, error })
    }
  }

  create = async (req, res, next) => {
    const vehicleBody = validateVehicle(req.body)

    if (!vehicleBody.success) {
      return next({ name: errors.VALIDATION_ERROR, errors: vehicleBody.error })
    }

    const vehicle = vehicleBody.data
    try {
      const newVehicle = await this.vehicleModel.create({ vehicle })
      return res.json(newVehicle)
    } catch (error) {
      next({ name: errors.DB_ERROR, error })
    }
  }

  update = async (req, res, next) => {
    const vehicleBody = validateVehicle(req.body)

    if (!vehicleBody.success) {
      return next({ name: errors.VALIDATION_ERROR, errors: vehicleBody.error })
    }

    const vehicle = vehicleBody.data
    const { id } = req.params

    try {
      const updatedVehicle = await this.vehicleModel.update({ id, vehicle })
      if (!updatedVehicle) {
        return res.status(404).json({ message: 'Vehicle not found' })
      }

      return res.json(updatedVehicle)
    } catch (error) {
      next({ name: errors.DB_ERROR, error })
    }
  }

  delete = async (req, res, next) => {
    const { id } = req.params
    try {
      const vehicle = await this.vehicleModel.delete({ id })
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' })
      }
      return res.json({ message: 'Vehicle deleted' })
    } catch (error) {
      next({ name: errors.DB_ERROR, error })
    }
  }
}
