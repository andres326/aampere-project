import PropTypes from 'prop-types'
import { Item } from './Item'

export const ItemsList = ({ vehicles }) => {
  return vehicles?.length === 0 ? (
    <h1 className="mt-4 text-center text-4xl font-bold">No vehicles found</h1>
  ) : (
    <section className="mt-6 max-w-4xl w-full gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:mx-auto ">
      {vehicles.map((vehicle) => (
        <Item key={vehicle.id} vehicle={vehicle} />
      ))}
    </section>
  )
}

ItemsList.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
}
