import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'
import Top from './Components/Top'
import { useEffect } from 'react';
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <>
    <ScrollToTop/>
    <Top/>
    <section className='min-h-[100vh]'>
    <Outlet/>
    </section>
     <Footer/>
    </>
  )
}

export default App
