import { useState } from 'react'
import { getVehicleById } from '../services/vehicle'
import { useEffect } from 'react'

export const useVehicleDetail = ({ id }) => {
  const [loading, setLoading] = useState(false)
  const [vehicle, setVehicle] = useState(null)

  const getVehicle = async () => {
    try {
      setLoading(true)
      const vehicle = await getVehicleById({ id })
      setVehicle(vehicle)
    } catch {
      setVehicle(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getVehicle()
  }, [id])

  return { vehicle, loading }
}
