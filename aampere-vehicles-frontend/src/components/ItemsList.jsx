import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Item } from './Item'

export const ItemsList = ({ vehicles }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {vehicles.map((vehicle) => (
        <Item key={vehicle.id} vehicle={vehicle} />
      ))}
    </ul>
  )
}

ItemsList.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
}
