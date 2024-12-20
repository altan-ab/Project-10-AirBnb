import { useEffect, useState } from 'react'
import ApartmentCard from './ApartmentCard'

const ApartmentListings = ({ startDate, endDate }) => {
  const [apartments, setApartments] = useState([]) //json verisi state
  const [searchTerm, setSearchTerm] = useState('') //Arama girişi state

  //***NOT*** undefined olursa toLowerCase için TypeError alıyorum bunu düzeltmek için doğrulamadan geçişi sağlayarak && operatörü kullandım. ******
  const filteredApartments = apartments.filter(
    (apartment) =>
      apartment &&
      apartment.title &&
      apartment.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetch('/apartments.json')
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch(() => console.log('Hata:', error))
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for an apartment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-1/2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredApartments.length > 0 ? (
          filteredApartments.map((apartment) => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              startDate={startDate}
              endDate={endDate}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No apartments match your search.
          </p>
        )}
      </div>
    </div>
  )
}
export default ApartmentListings
