import React from 'react'
import videoSrc from '../assets/videoss.mp4';
import urja from '../assets/Urja.png'
function FrontDisplay() {
    return (
        <div className='relative'>
            <video src={videoSrc} autoPlay loop muted preload="auto" className='relative z-0'></video>
            <div className='absolute top-1/3 left-1/2 text-center'>
                <p>NIT JAMSHEDPUR PRESENTS</p>
                {/* <img src={urja} alt="URJA" /> */}
                <h1>URJA'25</h1>
                <p>DATE</p>
            </div>
        </div>
    )
}

export default FrontDisplay