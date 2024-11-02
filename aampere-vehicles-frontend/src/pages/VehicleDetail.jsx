import { useParams } from 'react-router-dom'
import { useVehicleDetail } from '../hooks/useVehicleDetail'
import { priceformatted } from '../utils/format'
import { Badge } from '../components/Badge'

export const VehicleDetail = () => {
  const { id } = useParams()
  const { vehicle } = useVehicleDetail({ id })

  console.log(vehicle)

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 w-full mx-auto max-w-4xl">
      <article className="flex flex-col sm:gap-8 sm:flex-row">
        <img
          src={`https://d.newsweek.com/en/full/2223161/2024-lincoln-nautilus.jpg?w=400&e=e474d5058b0c341cd5369f7aa7e9164c`}
          alt={vehicle.brand}
        />
        <div className="flex flex-col py-2">
          <span className="text-md font-normal text-blue-600 mb-2">
            {vehicle.location}
          </span>
          <label className="mb-2">
            <span className="text-4xl font-bold">{vehicle.brand}</span> &nbsp;
            <span className="text-xl">{vehicle.model}</span>
          </label>
          <span className="text-lg font-bold text-rose-400 mb-4">
            {priceformatted(vehicle.price)}
          </span>
          <p className="text-sm font-semibold">
            From: <span className="font-normal">{vehicle.year}</span>
          </p>
          <p className="text-sm font-semibold">
            Battery capacity:{' '}
            <span className="font-normal">
              {vehicle.battery_capacity_kWh} kWh
            </span>
          </p>
          <p className="text-sm font-semibold mb-4">
            Charging speed:{' '}
            <span className="font-normal">{vehicle.charging_speed_kW} kW</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge text={`${vehicle.seats} seats`} />
            <Badge text={vehicle.condition} />
            <Badge text={vehicle.drivetrain} />
            <Badge
              text={vehicle.autopilot ? 'With autopilot' : 'No autopilot'}
            />
            {vehicle.accidents ?? <Badge text={'No accidents'} />}
          </div>
        </div>
      </article>
    </main>
  )
}
