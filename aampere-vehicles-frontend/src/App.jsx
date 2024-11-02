import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { VehiclesList } from './pages/VehiclesList'
import { VehicleDetail } from './pages/VehicleDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<VehiclesList />} />
      <Route path="/:id" element={<VehicleDetail />} />
    </Routes>
  )
}

export default App
