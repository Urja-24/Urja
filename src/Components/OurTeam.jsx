import React, { useEffect } from "react";
import { Photos } from "./Photos";
import "../CSS/Gallary.css";


import SportsHeader from "./AnimatedHeading";
import { LinkedList } from "../utils/DragDrop";

import img1 from "../assets/CoreTeam/Abhishek Kumar.jpg";
import img2 from "../assets/CoreTeam/Aditya Sonkar1.jpg";
import img3 from "../assets/CoreTeam/Anmol Rana.jpg";
import img4 from "../assets/CoreTeam/Avinash Ranjan.jpg";
import img5 from "../assets/CoreTeam/Bhukya Nithin Kumar.jpg";
import img6 from "../assets/CoreTeam/Divyanshu Kumar Singh.jpg";
import img7 from "../assets/CoreTeam/Harshit Raj.jpg";
import img8 from "../assets/CoreTeam/Narne Srinadh.jpg";
import img9 from "../assets/CoreTeam/Nishant Kumar Tiwari.jpg";
import img10 from "../assets/CoreTeam/Priya Sharma.jpg";
import img11 from "../assets/CoreTeam/Rituraj Prasad.png";
import img12 from "../assets/CoreTeam/Sunny Kumar.jpg";
import img13 from "../assets/CoreTeam/Upkar Kumar Mahto.png";
import img14 from "../assets/CoreTeam/IMG20240214205221.jpg";

const teamMembers = [
  { img: img1, name: "Abhishek Kumar" },
  { img: img2, name: "Aditya Sonkar" },
  { img: img3, name: "Anmol Rana" },
  { img: img4, name: "Avinash Ranjan" },
  { img: img5, name: "Bhukya Nithin Kumar" },
  { img: img6, name: "Divyanshu Kumar Singh" },
  { img: img7, name: "Harshit Raj" },
  { img: img8, name: "Narne Srinadh" },
  { img: img9, name: "Nishant Kumar Tiwari" },
  { img: img10, name: "Priya Sharma" },
  { img: img11, name: "Rituraj Prasad" },
  { img: img12, name: "Sunny Kumar" },
  { img: img13, name: "Upkar Kumar Mahto" },
  { img: img14, name: "IMG20240214205221" }
];



function OurTeam() {
  useEffect(() => {
    const container = document.querySelector(".container");
    const boxes = document.querySelectorAll(".box");

    const list = new LinkedList();
    boxes.forEach((box) => list.append(box));
    let draggedElementNode = null,
      dragged = null;
    boxes.forEach((box) => {
      box.addEventListener("dragstart", (event) => {
        dragged = event.target;
        draggedElementNode = list.find(event.target);
        event.dataTransfer.effectAllowed = "move";
        event.target.style.opacity = "0.5";
      });
      box.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      });

      // Event listener for drop
      box.addEventListener("drop", (event) => {
        event.preventDefault();
        const target = event.currentTarget;
        const targetNode = list.find(event.currentTarget);

        if (draggedElementNode && targetNode) {
          if (list.isBefore(dragged, target))
            list.swap_reverse(draggedElementNode, targetNode, container);
          else list.swap(draggedElementNode, targetNode, container);
        }

        draggedElementNode = null;
      });

      // Event listener for drag end
      box.addEventListener("dragend", (event) => {
        event.target.style.opacity = ""; // Reset opacity
        draggedElementNode = null;
      });
    });
  }, []);

  return (
    <div className="mt-40">
      <div>
        <div className="flex justify-center gap-x-4">
          <SportsHeader heading={"Our"} />
          <SportsHeader heading={"Team"} />
        </div>
        <div className=" flex flex-wrap gap-x-5 justify-evenly gap-y-20 py-10 gallary container mx-auto">
        {teamMembers.map((member, index) => (
            <div key={index} className="box">
              <Photos img={member.img} />
              <p className="text-center mt-2 text-orange-800 text-xl font-semibold">{member.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurTeam;

