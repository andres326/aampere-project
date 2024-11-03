import { useParams } from 'react-router-dom'
import { useVehicleDetail } from '../hooks/useVehicleDetail'
import { useVehicle } from '../hooks/useVehicle'
import { priceformatted } from '../utils/format'
import { Badge } from '../components/Badge'
import { BackIcon } from '../components/Icons'
import { Image } from '../components/Image'
import { Item } from '../components/Item'
import { useMemo } from 'react'
import { AnimatedLink } from '../components/AnimatedLink'

export const VehicleDetail = () => {
  const { id } = useParams()
  const { vehicle } = useVehicleDetail({ id })
  const { vehicles } = useVehicle({ limit: 3 })

  const otherVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => vehicle?.id !== id).slice(0, 2)
  }, [vehicles, id])

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 w-full mx-auto max-w-4xl">
      <AnimatedLink
        to="/"
        className="flex text-sm items-center underline mb-4 hover:text-blue-600"
      >
        <BackIcon height={16} width={16} />
        Back to list
      </AnimatedLink>
      <article className="flex flex-col sm:gap-8 md:flex-row mb-8">
        <Image
          src={'/car.webp'}
          alt={vehicle?.brand}
          className="w-full md:w-1/2 aspect-video"
        />
        <div className="flex flex-col py-2">
          <span className="text-md font-normal text-blue-600 mb-2">
            {vehicle?.location}
          </span>
          <label className="mb-2">
            <span className="text-4xl font-bold">{vehicle?.brand}</span> &nbsp;
            <span className="text-xl">{vehicle?.model}</span>
          </label>
          <span className="text-lg font-bold text-rose-400 mb-4">
            {priceformatted(vehicle?.price || 0)}
          </span>
          <p className="text-sm font-semibold">
            From: <span className="font-normal">{vehicle?.year}</span>
          </p>
          <p className="text-sm font-semibold">
            Battery capacity:{' '}
            <span className="font-normal">{vehicle?.batteryCapacity} kWh</span>
          </p>
          <p className="text-sm font-semibold mb-4">
            Charging speed:{' '}
            <span className="font-normal">{vehicle?.chargingSpeed} kW</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              text={`${vehicle?.seats} seats`}
              classes={'bg-gray-50 text-gray-600'}
            />
            <Badge
              text={vehicle?.condition}
              classes={'bg-gray-50 text-gray-600'}
            />
            <Badge
              text={vehicle?.drivetrain}
              classes={'bg-gray-50 text-gray-600'}
            />
            <Badge
              text={vehicle?.autopilot ? 'With autopilot' : 'No autopilot'}
              classes={'bg-gray-50 text-gray-600'}
            />
            {vehicle?.accidents ?? <Badge text={'No accidents'} />}
          </div>
        </div>
      </article>
      <section>
        <h3 className="text-xl font-semibold mb-4">Check other vehicles</h3>
        <div className="flex flex-col gap-4 md:flex-row w-full">
          {otherVehicles.map((vehicle) => (
            <Item key={vehicle.id} vehicle={vehicle} putHorizontal />
          ))}
        </div>
      </section>
    </main>
  )
}
