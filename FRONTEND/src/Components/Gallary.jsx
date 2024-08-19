import React, { useEffect } from 'react'
import { Photos } from './Photos'
import '../CSS/Gallary.css'
import Navbar from './Navbar'
import { LinkedList } from '../utils/DragDrop';
const img = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img1 = 'https://i.pinimg.com/564x/4b/77/12/4b771221629ca9d264393973faa29ff4.jpg'
const images = [img1, img, img1, img, img, img, img, img, img, img, img, img1]
function Gallary() {
  useEffect(() => {
    const container = document.querySelector(".container");
    const boxes = document.querySelectorAll(".box");
    // console.log(container)
    const list = new LinkedList()
    boxes.forEach(box => list.append(box));
    let draggedElementNode = null;
    boxes.forEach(box => {
      box.addEventListener('dragstart', (event) => {
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
        const targetNode = list.find(event.currentTarget);

        if (draggedElementNode && targetNode) {
          list.swap(draggedElementNode, targetNode, container);
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
    <div className='bg-black'>
      <Navbar />
      <div className='flex flex-wrap gap-x-5 justify-evenly gap-y-20 py-24 gallary container'>
        {images.map(ele => <Photos key={Math.random()} img={ele} />)}
      </div>
    </div>
  )
}

export default Gallary