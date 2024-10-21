import React, { useEffect } from 'react'
import Navbar from './Navbar'
import '../CSS/Top.css'

function Top() {
    useEffect(() => {
        // Create a link element for the font
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css?family=Kodchasan';

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    return (
        <div className='fixed top-0 w-full top-navigate mb-2'>
         
                <Navbar />
           
        </div>
    )
}

export default Top