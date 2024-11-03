import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { VehiclesList } from './pages/VehiclesList.jsx'
import { VehicleDetail } from './pages/VehicleDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <VehiclesList />,
  },
  {
    path: '/:id',
    element: <VehicleDetail />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
