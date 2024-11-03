import { useState } from 'react'
import { getVehiclesList } from '../services/vehicle'
import { useEffect } from 'react'

export const useVehicle = ({ limit = null } = {}) => {
  const [loading, setLoading] = useState(false)
  const [vehicles, setVehicles] = useState([])

  const getVehicles = async () => {
    try {
      setLoading(true)
      const vehicles = await getVehiclesList({ limit })
      setVehicles(vehicles)
    } catch {
      setVehicles([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getVehicles()
  }, [])

  return { vehicles, loading }
}
