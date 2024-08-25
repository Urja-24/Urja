import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Gallary from './Components/Gallary.jsx'
import PointTable from './Components/PointTable.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "/point-table",
      element: <PointTable />
    },
    {
      path:"/gallary",
      element:<Gallary/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
