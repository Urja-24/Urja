import React from "react";
import { Photos } from "./Photos";
import "../CSS/Gallary.css";
import members from "../assets/member.json";
import SportsHeader from "./AnimatedHeading";
import { LinkedList } from "../utils/DragDrop";

function OurTeam() {

  return (
    <section className="container mx-auto mt-40">
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
    </section>
  );
}

export default OurTeam;
