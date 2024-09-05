import React, { useEffect } from 'react'
import { Photos } from './Photos'
import '../CSS/Gallary.css'
import { LinkedList } from '../utils/DragDrop';
import SportsHeader from './AnimatedHeading';
import img3 from "../assets/GalaryPic/image3.jpg"
import img1 from "../assets/GalaryPic/image1.jpg"
import img2 from "../assets/GalaryPic/image2.jpg"
import img4 from "../assets/GalaryPic/image4.jpg"
import img5 from "../assets/GalaryPic/image5.jpg"
import img7 from "../assets/GalaryPic/image7.jpg"
import img8 from "../assets/GalaryPic/image8.jpg"
import img9 from "../assets/GalaryPic/image10.jpg"
import img10 from "../assets/GalaryPic/image11.jpg"
import img11 from "../assets/GalaryPic/image13.jpg"
import img12 from "../assets/GalaryPic/image14.jpg"
import img13 from "../assets/GalaryPic/image16.jpg"
import img14 from "../assets/GalaryPic/image18.jpg"
import img16 from "../assets/GalaryPic/image20.jpg"
import img17 from "../assets/GalaryPic/image21.jpg"
import img18 from "../assets/GalaryPic/image22.jpg"
import img20 from "../assets/GalaryPic/image24.jpg"
import img21 from "../assets/GalaryPic/image25.jpg"
import img22 from "../assets/GalaryPic/image26.jpeg"
import img23 from "../assets/GalaryPic/image_0045.JPG"
import img24 from "../assets/GalaryPic/image_0155.JPG"
import img25 from "../assets/GalaryPic/image_0259.JPG"
import img26 from "../assets/GalaryPic/image_0295.JPG"
import img27 from "../assets/GalaryPic/image_0343.JPG"


const images = [img3,img1,img2,img4,img5,img7,img8,img9,img10,img11,img12,img13,img14,img16,img17,img18,img20,img21,img22,img23,img24,img25,img26,img27]

function Gallery() {
  useEffect(() => {
    const container = document.querySelector(".container");
    const boxes = document.querySelectorAll(".box");
    // console.log(container)
    const list = new LinkedList()
    boxes.forEach(box => list.append(box));
    let draggedElementNode = null,dragged=null;
    boxes.forEach(box => {
      box.addEventListener('dragstart', (event) => {
        dragged=event.target;
        draggedElementNode = list.find(event.target);
        event.dataTransfer.effectAllowed = "move";
        event.target.style.opacity = '0.5';
      });
      box.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      });

      // Event listener for drop
      box.addEventListener('drop', (event) => {
        event.preventDefault();
        const target=event.currentTarget;
        const targetNode = list.find(event.currentTarget);

        if (draggedElementNode && targetNode) {
          if (list.isBefore(dragged, target))
            list.swap_reverse(draggedElementNode, targetNode, container);
          else
            list.swap(draggedElementNode, targetNode, container)
        }

        draggedElementNode = null;
      });

      // Event listener for drag end
      box.addEventListener('dragend', (event) => {
        event.target.style.opacity = '';  // Reset opacity
        draggedElementNode = null;
      });
    });
  }, [])

  return (
    <div className='mt-40'>
      <SportsHeader heading={"Gallery"} />
      <div className='flex flex-wrap gap-x-5 justify-evenly gap-y-20 py-10 gallary container mx-auto'>
        {images.map(ele => <Photos key={Math.random()} img={ele} />)}
      </div>
    </div>
  )
}

export default Gallery