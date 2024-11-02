import { z } from 'zod'

const vehicleSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  price: z.number(),
  range_km: z.number(),
  color: z.string(),
  condition: z.string(),
  battery_capacity_kWh: z.number(),
  charging_speed_kW: z.number(),
  seats: z.number(),
  drivetrain: z.string(),
  location: z.string(),
  autopilot: z.boolean(),
  kilometer_count: z.number(),
  accidents: z.boolean(),
  accident_description: z.string().optional(),
})

export function validateVehicle(vehicle) {
  return vehicleSchema.safeParse(vehicle)
}

export function validatePartialVehicle(vehicle) {
  return vehicleSchema.partial().safeParse(vehicle)
}
