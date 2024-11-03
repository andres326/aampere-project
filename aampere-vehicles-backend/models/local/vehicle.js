import { randomUUID } from 'node:crypto'
import { readFile } from '../../utils/require-path.js'
const vehicles = readFile('../vehicles.json')

export class VehicleModel {
  static async get({ limit }) {
    if (limit) return vehicles.slice(0, limit)
    return vehicles
  }

  static async getById({ id }) {
    return vehicles.find((vehicle) => vehicle.id === id)
  }

  static async create({ vehicle }) {
    const newVehicle = { id: randomUUID(), ...vehicle }
    vehicles.push(newVehicle)
    return newVehicle
  }

  static async update({ id, vehicle }) {
    const index = vehicles.findIndex((vehicle) => vehicle.id === id)
    if (index === -1) return false

    vehicles[index] = { ...vehicles[index], ...vehicle }
    return vehicles[index]
  }

  static async delete({ id }) {
    const index = vehicles.findIndex((vehicle) => vehicle.id === id)
    if (index === -1) return false

    vehicles.splice(index, 1)
    return true
  }
}
