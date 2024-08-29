import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Gallary from './Components/Gallary.jsx'
import OurTeam from './Components/OurTeam.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />
    }, {
      path: "/gallary",
      element: <Gallary />
    }, {
      path: '/team',
      element: <OurTeam />
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
