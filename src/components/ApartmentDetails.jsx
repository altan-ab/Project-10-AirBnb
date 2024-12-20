import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ApartmentDetails = () => {
  const { id } = useParams()
  const { state: dateState } = useLocation()
  const [apartment, setApartment] = useState(null)

  useEffect(() => {
    fetch('/apartments.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedApartment = data.find((item) => item.id === parseInt(id))
        setApartment(selectedApartment)
      })
      .catch((error) => console.log('Error:', error))
  }, [id])

  if (!apartment) {
    return <p>Loading...</p>
  }

  const { title, description, image, price } = apartment
  const { startDate, endDate } = dateState || {}

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-green-600 font-bold mb-4">${price} / Night</p>
      <div className="space-x-4">
        {!startDate && !endDate && (
          <h2 className="text-gray-400 font-bold mb-4">
            Please go "Back to Home" page, choose your reservation date and view
            your reservation 🙂
          </h2>
        )}
        <Link
          to="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back to Home
        </Link>
        {startDate && endDate && (
          <Link
            to={`/reservation/${id}`}
            state={{ startDate, endDate }}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Make a Reservation
          </Link>
        )}
      </div>
    </div>
  )
}

export default ApartmentDetails
