import { Link, useLocation, useParams } from 'react-router-dom'

const ReservationPage = () => {
  const { state } = useLocation()
  const { id } = useParams()

  if (!state || !state.startDate || !state.endDate) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Reservation details are missing!
        </h2>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  const { startDate, endDate } = state

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-6">Reservation Confirmed</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your reservation has been made for the dates:
      </p>
      <p className="text-xl font-semibold text-teal-600">
        {startDate} - {endDate}
      </p>
      <div className="mt-6 space-x-4">
        <Link
          to="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default ReservationPage
