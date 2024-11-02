import { useParams } from 'react-router-dom'
import { useVehicleDetail } from '../hooks/useVehicleDetail'

export const VehicleDetail = () => {
  const { id } = useParams()
  const { vehicle } = useVehicleDetail({ id })

  console.log(vehicle)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <article className="flex flex-row gap-4">
        <img
          src={`https://d.newsweek.com/en/full/2223161/2024-lincoln-nautilus.jpg?w=400&e=e474d5058b0c341cd5369f7aa7e9164c`}
          alt={vehicle.brand}
        />
        <div className="flex flex-col py-2">
          <h1 className="text-4xl font-bold">{vehicle.brand}</h1>
          <p className="text-xl">{vehicle.model}</p>
        </div>
      </article>
    </main>
  )
}
