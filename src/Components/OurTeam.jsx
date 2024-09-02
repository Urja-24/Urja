import React from "react";
import { Photos } from "./Photos";
import TeamMember from './TeamMember'
import '../CSS/Team.css'
import member from '../JSON/member.json'
import AnimatedHeading from './AnimatedHeading'

console.log(typeof member["members"])
function OurTeam() {

  return (
    <section className="team-section mt-12 mb-5">
      <div className='p-10'>
        <div className="container mx-auto text-center">
          <div className="mt-20 flex gap-6 justify-center">
            <AnimatedHeading heading="Our" />
            <AnimatedHeading heading="Team" />
          </div>
          <div className=' flex flex-wrap justify-around mt-14 gap-y-14'>
            {member.secretary.map((member, index) => (
              <div key={index} className="team-card shadow-lg rounded-lg">
                <TeamMember{...member} />

              </div>
            ))}
          </div>
          <div className="team-grid mt-10 gap-x-44 gap-y-24">
            {member.members.map((member, index) => (
              <div key={index} className="team-card shadow-lg rounded-lg">
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;

