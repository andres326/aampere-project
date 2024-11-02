import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Item = ({ vehicle }) => {
  return (
    <Link to={`/${vehicle.id}`}>
      <div className="flex p-5 justify-between border rounded border-gray-200 sm:flex-col ">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p>
              <span className="text-2xl font-semibold text-gray-900">
                {vehicle.brand}&nbsp;
              </span>
              <span className="text-lg text-gray-600">{vehicle.model}</span>
            </p>
            <p className="text-sm text-gray-500">{vehicle.location}</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-gray-500">{vehicle.year}</p>
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
  }),
}
