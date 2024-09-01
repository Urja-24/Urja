import React, { useEffect } from "react";
import { Photos } from "./Photos";
import "../CSS/Gallary.css";
import members from "../assets/member.json";
import SportsHeader from "./AnimatedHeading";
import { LinkedList } from "../utils/DragDrop";

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
    <div className="container mx-auto mt-40">
      <div>
        <div className="flex justify-center gap-x-4">
          <SportsHeader heading={"Our"} />

          <SportsHeader heading={"Team"} />
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-20 py-10 gallery container mx-auto">
          {members.map((member) => (
            <div key={member.id} className="team-member">
              <Photos img={member.imgSrc} />

              <div className="text-center mt-4">
                <h5 className="text-lg text-white font-bold">{member.name}</h5>

                <p className="text-sm text-gray-200">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
