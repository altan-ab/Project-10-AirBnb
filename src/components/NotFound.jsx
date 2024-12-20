import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-4">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
