import React from "react";
import { Photos } from "./Photos";
import TeamMember from './TeamMember'
import '../CSS/Team.css'
import AnimatedHeading from './AnimatedHeading'
const secratray = [
  {
    name: "Ravindra Raj",
    title: "Sports Secretary",
    imgSrc: "https://urja-2023.netlify.app/static/media/ravindraRajImg.b1579a0b4171c12408cb.jpeg",
    phone: 123
  },
  {
    name: "Anubhav",
    title: "Joint Sports Secretary",
    imgSrc: "https://urja-2023.netlify.app/static/media/anubhavImg.b0f872b310dadbbe0a26.jpg",
    phone: 123
  }]
const teamMembers = [
  {
    name: "Kuldeep Kumar",
    title: "General Secretary",
    imgSrc: "https://urja-2023.netlify.app/static/media/kuldeep.f6a0389920c01fee99de.jpeg",
    phone: 123
  },
  {
    name: "Nitin Kumar",
    title: "Joint Secretary",
    imgSrc: "https://urja-2023.netlify.app/static/media/nitin.8bde50598ffd0d248453.jpg",
    phone: 123
  },
  {
    name: "Sudhanshu Bharti",
    title: "Executive Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/sudhanshu.bc6107f072e8b5267aa9.jpg",
    phone: 123
  },
  {
    name: "Navya Shankar",
    title: "Executive Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/navya.0a522dc06280e730daac.jpeg",
    phone: 123
  },
  {
    name: "Prashant Raj",
    title: "Event Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/prashant.4fb68eb017ace87c4922.jpg",
    phone: 123
  },
  {
    name: "Shravya",
    title: "Event Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/shravya.a155d877bc7b83486bc1.jpeg",
    phone: 123
  },
  {
    name: "Satish",
    title: "Logistic Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/satish.535b22f6d1b677365c00.jpeg",
    phone: 123
  },
  {
    name: "Nikita Sundi",
    title: "Logistic Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/nikita.90906f889f71ecc0c289.jpeg",
    phone: 123
  },
  {
    name: "Biswajit Murmu",
    title: "Medical Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/biswajit.54df083a0460bb70ec0d.jpeg",
    phone: 123
  },
  {
    name: "Kumar Abhinav",
    title: "Medical Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/abhinav.d006bebeff0967d57ffb.jpeg",
    phone: 123
  },
  {
    name: "Amol Sourav",
    title: "Medical Head",
    imgSrc: "https://urja-2023.netlify.app/static/media/Amol_sourav.464fb248a378d6772ecc.jpeg",
    phone: 123
  },
];

function OurTeam() {

  return (
    <section className="team-section mt-12 mb-5">
      <div className='bg-black p-10'>
        <div className="container mx-auto text-center">
          <div className="mt-20 flex gap-6 justify-center">
            <AnimatedHeading heading="Our" />
            <AnimatedHeading heading="Team" />
          </div>
          <div className=' flex flex-wrap justify-around mt-10 gap-y-14'>
            {secratray.map((member, index) => (
              <div key={index} className="team-card shadow-lg rounded-lg">
                <TeamMember{...member} />

              </div>
            ))}
          </div>
          <div className="team-grid mt-10 gap-x-44 gap-y-20">
            {teamMembers.map((member, index) => (
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

