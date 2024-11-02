import { z } from 'zod'

const vehicleSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  color: z.string(),
  price: z.number(),
})

export function validateVehicle(vehicle) {
  return vehicleSchema.safeParse(vehicle)
}

export function validatePartialVehicle(vehicle) {
  return vehicleSchema.partial().safeParse(vehicle)
}
