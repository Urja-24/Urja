import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
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
