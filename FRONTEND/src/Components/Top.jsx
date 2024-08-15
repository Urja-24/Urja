import React, { useEffect } from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'
import '../CSS/Top.css'


function Top() {
    useEffect(() => {
        // Create a link element for the font
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css?family=Kodchasan';
        
        // Append the link element to the document head
        document.head.appendChild(link);
    
        // Cleanup function to remove the link element when the component unmounts
        return () => {
          document.head.removeChild(link);
        };
      }, []);
    return (
        <div className='fixed top-0 w-full top-navigate'>
            <div>
                <TopHeader />
                <Navbar />
            </div>
        </div>
    )
}

export default Top