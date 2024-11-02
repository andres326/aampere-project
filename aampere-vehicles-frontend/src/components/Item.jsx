import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Item = ({ vehicle }) => {
  return (
    <Link to={`/${vehicle.id}`}>
      <li className="flex justify-between gap-x-6 py-5 border-b border-gray-100">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900">
              {vehicle.brand}
            </p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">
              {vehicle.model}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">{vehicle.location}</p>
          <p className="mt-1 text-xs/5 text-gray-500">
            {vehicle.year} {vehicle.color}
          </p>
        </div>
      </li>
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
  }),
}
