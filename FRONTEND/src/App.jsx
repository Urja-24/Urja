import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
function App() {

  return (
    <>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
