
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Top from './Components/Top'
function App() {

  return (
    <>
    <Top/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
