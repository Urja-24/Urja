import React from 'react';
import img3 from "../assets/GalaryPic/image3.jpg";
import img1 from "../assets/GalaryPic/image1.jpg";
import img2 from "../assets/GalaryPic/image2.jpg";
import img4 from "../assets/GalaryPic/image4.jpg";
import img5 from "../assets/GalaryPic/image5.jpg";
import img7 from "../assets/GalaryPic/image7.jpg";
import img8 from "../assets/GalaryPic/image8.jpg";
import img9 from "../assets/GalaryPic/image10.jpg";
import img10 from "../assets/GalaryPic/image11.jpg";
import img11 from "../assets/GalaryPic/image13.jpg";
import img12 from "../assets/GalaryPic/image14.jpg";
import img13 from "../assets/GalaryPic/image16.jpg";
import img14 from "../assets/GalaryPic/image18.jpg";
import img16 from "../assets/GalaryPic/image20.jpg";
import img17 from "../assets/GalaryPic/image21.jpg";
import img18 from "../assets/GalaryPic/image22.jpg";
import img20 from "../assets/GalaryPic/image24.jpg";
import img21 from "../assets/GalaryPic/image25.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SportsHeader from './AnimatedHeading';
import { Photos } from './Photos';

const images = [img3, img1, img2, img4, img5, img7, img8, img9, img10, img11, img12, img13, img14, img16, img17, img18, img20, img21];

function CarouselGallery() {
    return (
        <div className='mt-44'>
            <SportsHeader heading={"Gallery"} />
            <div className='my-20'>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={2500}
                    centerMode={false}
                    containerClass="container-with-dots"
                    draggable
                    infinite
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3,
                            partialVisibilityGutter: 40,
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2,
                            partialVisibilityGutter: 30,
                        },
                        mobile: {
                            breakpoint: { max: 800, min: 0 },
                            items: 1,
                            partialVisibilityGutter: 30,
                        },
                    }}
                    rewind={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                    transitionDuration={500} // Set the duration of the transition (in ms)
                    easing="ease-in-out" // Set the easing function for smooth transitions
                >
                    {images.map((ele, index) => (
                        <div key={index} className='w-screen'>
                            <Photos img={ele} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CarouselGallery;
