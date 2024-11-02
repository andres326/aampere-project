import { useState } from 'react'
import { getAllVehicles } from '../services/vehicle'
import { useEffect } from 'react'

export const useVehicle = () => {
  const [loading, setLoading] = useState(false)
  const [vehicles, setVehicles] = useState([])

  const getVehicles = async () => {
    try {
      setLoading(true)
      const vehicles = await getAllVehicles()
      setVehicles(vehicles)
    } catch {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getVehicles()
  }, [])

  return { vehicles, loading }
}
