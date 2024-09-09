// import './index.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Top from './Components/Top'
function App() {

  return (
    <>
    <Top/>
    <section className='min-h-[100vh]'>
    
    <Outlet/>

    </section>
     <Footer/>
    </>
  )
}

export default App
