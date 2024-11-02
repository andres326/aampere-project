import { ItemsList } from '../components/ItemsList'
import { useVehicle } from '../hooks/useVehicle'

export const VehiclesList = () => {
  const { vehicles, loading } = useVehicle()

  console.log(vehicles)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <ItemsList vehicles={vehicles} />
    </main>
  )
}
