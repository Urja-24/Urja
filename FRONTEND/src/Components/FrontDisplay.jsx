import React from 'react'
import videoSrc from '../assets/videoss.mp4';
function FrontDisplay() {
    return (
        <div>
            <video src={videoSrc} autoPlay loop muted preload="auto" className='relative z-0'></video>
        </div>
    )
}

export default FrontDisplay