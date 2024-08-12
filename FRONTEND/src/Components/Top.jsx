import React, { useEffect } from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'
import '../CSS/Top.css'

function Top() {
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