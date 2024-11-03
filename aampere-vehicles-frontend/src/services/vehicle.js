const { VITE_API_URI: API_URI } = import.meta.env

const mappedVehicles = (vehicle) => ({
  id: vehicle.id,
  brand: vehicle.brand,
  model: vehicle.model,
  year: vehicle.year,
  price: vehicle.price,
  range: vehicle.range_km,
  color: vehicle.color,
  condition: vehicle.condition,
  batteryCapacity: vehicle.battery_capacity_kwh,
  chargingSpeed: vehicle.charging_speed_kw,
  seats: vehicle.seats,
  drivetrain: vehicle.drivetrain,
  location: vehicle.location,
  autopilot: vehicle.autopilot,
  accidents: vehicle.accidents,
  accidentDescription: vehicle.accident_description,
})

export async function getAllVehicles() {
  const response = await fetch(`${API_URI}/vehicles`)
  const data = await response.json()
  if (data.error) throw new Error(data.error)

  return data.map(mappedVehicles)
}

export async function getVehicleById({ id }) {
  const response = await fetch(`${API_URI}/vehicles/${id}`)
  const data = await response.json()
  if (data.error) throw new Error(data.error)

  return mappedVehicles(data)
}
