import { useState } from 'react'
import ApartmentListings from '../components/ApartmentListing'

const HomePage = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-6">
        Choose Your Apartment
      </h1>
      <div className="flex justify-center space-x-4 mb-6">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <ApartmentListings startDate={startDate} endDate={endDate} />
    </div>
  )
}
export default HomePage
