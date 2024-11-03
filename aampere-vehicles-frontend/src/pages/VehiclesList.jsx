import { useMemo, useState } from 'react'
import { ItemsList } from '../components/ItemsList'
import { useVehicle } from '../hooks/useVehicle'
import { SearchIcon } from '../components/Icons'

export const VehiclesList = () => {
  const { vehicles } = useVehicle()
  const [filter, setFilter] = useState(null)

  const filteredVehicles = useMemo(() => {
    if (!filter) return vehicles
    return vehicles.filter((vehicle) =>
      vehicle.brand.toLowerCase().includes(filter.toLowerCase())
    )
  }, [filter, vehicles])

  return (
    <main className="flex flex-col min-h-screen px-4 py-12">
      <div className="flex px-4 py-3 mx-4 rounded-md border-2 border-gray-400 overflow-hidden max-w-[300px]">
        <SearchIcon width="16" className="mr-2 text-gray-500" />
        <input
          placeholder="Hyundai, Tesla, Kia ..."
          className="w-full outline-none bg-transparent text-gray-600 text-sm"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ItemsList vehicles={filteredVehicles} />
    </main>
  )
}
