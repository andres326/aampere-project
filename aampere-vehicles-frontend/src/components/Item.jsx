import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Badge } from './Badge'
import { Image } from './Image'

export const Item = ({ vehicle, putHorizontal = false }) => {
  return (
    <Link to={`/${vehicle.id}`}>
      <div
        className={`flex ${
          putHorizontal ? '' : 'flex-col'
        } p-5 gap-2 border rounded border-gray-200 h-full`}
      >
        <Image
          src={'/car.webp'}
          alt={vehicle.brand}
          className={`${putHorizontal ? 'w-1/2' : 'w-full'} aspect-video`}
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-2">
            <p>
              <span className="text-2xl font-semibold text-gray-900">
                {vehicle.brand}&nbsp;
              </span>
              <span className="text-lg text-gray-600 mr-2">
                {vehicle.model}
              </span>
            </p>
            {vehicle.condition === 'New' && (
              <Badge
                text={'New!'}
                classes={'bg-green-200 text-green-800 max-w-[44px]'}
              />
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">{vehicle.location}</p>
            <p className="text-sm text-gray-500">{vehicle.year}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

Item.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
  }),
  putHorizontal: PropTypes.bool,
}
