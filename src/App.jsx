import HomePage from './pages/HomePage'
import ApartmentDetails from './components/ApartmentDetails'
import ReservationPage from './pages/ReservationPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />
        <Route path="/reservation/:id" element={<ReservationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App
