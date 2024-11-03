// db.js
import postgres from 'postgres'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'postgres',
  database: 'EVS_Aampere',
}
const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const sql = postgres(connectionString)

const vehicleColumns = [
  'brand',
  'model',
  'year',
  'price',
  'range_km',
  'color',
  'condition',
  'battery_capacity_kwh',
  'charging_speed_kw',
  'seats',
  'drivetrain',
  'location',
  'autopilot',
  'kilometer_count',
  'accidents',
]

export class VehicleModel {
  static async getAll() {
    const result = await sql`SELECT * FROM vehicles`
    return result
  }

  static async get({ id }) {
    const [result] = await sql`SELECT * FROM vehicles WHERE id = ${id}`
    return result
  }

  static async create({ vehicle }) {
    const [result] = await sql`INSERT INTO vehicles${sql(
      vehicle,
      vehicleColumns
    )}
    returning *
    `

    return result
  }

  static async update({ id, vehicle }) {
    const exists = await sql`SELECT * FROM vehicles WHERE id = ${id}`
    if (!exists) return false

    const [result] = await sql`UPDATE vehicles SET ${sql(
      vehicle,
      vehicleColumns
    )} WHERE id = ${id}
    returning *
    `

    return result
  }

  static async delete({ id }) {
    const exists = await sql`SELECT * FROM vehicles WHERE id = ${id}`
    if (!exists) return false

    await sql`DELETE FROM vehicles WHERE id = ${id}`
    return true
  }
}
