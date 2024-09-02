import React from 'react'
import Gallery from './Gallery';
import CarouselGallary from './CarouselGallary';

function MultiPurposeGallary() {
    const isMobile = window.innerWidth <= 800;
    if(isMobile)
        return <CarouselGallary/>
    else
    return <Gallery/>
}

export default MultiPurposeGallary