import { Link } from 'react-router-dom'

const ApartmentCard = ({ apartment, startDate, endDate }) => {
  const { id, title, description, image, price } = apartment

  return (
    <div className="flex border rounded-lg p-4 shadow-md">
      <img src={image} alt={title} className="w-1/4 rounded-md object-cover" />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="font-bold mt-2">${price} / Night</p>
        <Link
          to={`/apartments/${id}`}
          state={{ startDate, endDate }}
          className="mt-2 bg-teal-500 text-white px-4 py-1 rounded hover:bg-teal-600 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
export default ApartmentCard
