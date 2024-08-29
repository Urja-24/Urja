import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Matches from './Components/Matches.jsx'
import PointTable from './Components/PointTable.jsx'
import OurTeam from './Components/OurTeam.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "/detailed-points-table",
      element: <PointTable />
    },
    {
      path:"/matches",
      element:<Matches/>
    },
    {
      path:"/our-team",
      element:<OurTeam/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
