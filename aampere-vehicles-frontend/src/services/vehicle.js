const { VITE_API_URI: API_URI } = import.meta.env

export async function getAllVehicles() {
  const response = await fetch(`${API_URI}/vehicles`)
  const data = await response.json()
  return data
}

export async function getVehicleById({ id }) {
  const response = await fetch(`${API_URI}/vehicles/${id}`)
  const data = await response.json()
  return data
}
