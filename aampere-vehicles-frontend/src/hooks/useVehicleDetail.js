import { useState } from 'react'
import { getVehicleById } from '../services/vehicle'
import { useEffect } from 'react'

export const useVehicleDetail = ({ id }) => {
  const [loading, setLoading] = useState(false)
  const [vehicle, setVehicle] = useState([])

  const getVehicle = async () => {
    try {
      setLoading(true)
      const vehicle = await getVehicleById({ id })
      setVehicle(vehicle)
    } catch {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getVehicle()
  }, [])

  return { vehicle, loading }
}
