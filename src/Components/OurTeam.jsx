import React from "react";
import { Photos } from "./Photos";
import "../CSS/Gallary.css";
// import members from "../assets/member.json";
import SportsHeader from "./AnimatedHeading";

import AbhishekKumar from '../assets/CoreTeam/AbhishekKumar.webp'
import AdityaSonkar from '../assets/CoreTeam/AdityaiSonkar.webp'
import AnmolRana from '../assets/CoreTeam/AnmoloRana.webp'
import DivyanshuKumarSing from '../assets/CoreTeam/DivyanshuKumarSingh.webp'
import HarshitRaj from '../assets/CoreTeam/HarshitRaj.webp'
import NishantKumarTiwary from '../assets/CoreTeam/NishantKumarTiwari.webp'
import PriyaSharma from '../assets/CoreTeam/PriyaSharma.webp'
import RiturajPrasad from '../assets/CoreTeam/RiturajPrasad.webp'
import Srinadh from '../assets/CoreTeam/Srinadh.webp'
import SunnyKumar from '../assets/CoreTeam/SunnyKumar.webp'
import UpkarKumarMahato from '../assets/CoreTeam/UpkarKumarMahto.webp'
import AvinashRanjan from '../assets/CoreTeam/AvinashRanjan.webp'
import BhukyaNitinKumar from '../assets/CoreTeam/BhukyaNithinKumar.webp'
function OurTeam() {

  const members = [
    {
      "name": "Rohit Sharma",
      "title": "Sports Secretary",
      "imgSrc": '',
      "phone": 1234567890
    },
    {
      "name": "Jyoti Kumari",
      "title": "Joint Sports Secretary",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Harshit Raj",
      "title": "Joint Sports Secretary",
      "imgSrc": HarshitRaj,
      "phone": 123
    },
    {
      "name": "Avinash Ranjan",
      "title": "General Secretary",
      "imgSrc": AvinashRanjan,
      "phone": 123
    },
    {
      "name": "Shubham Kumar Choudhary",
      "title": "General Secretary",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Aditya Sonkar",
      "title": "Joint Secretary",
      "imgSrc": AdityaSonkar,
      "phone": 123
    },
    {
      "name": "Nishant Kumar Tiwary",
      "title": "Joint Secretary",
      "imgSrc": NishantKumarTiwary,
      "phone": 123
    },
    {
      "name": "Krishna Kumar Gupta",
      "title": "Event Head",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Priya Sharma",
      "title": "Event Head",
      "imgSrc": PriyaSharma,
      "phone": 123
    },
    {
      "name": "Vinay Bihari",
      "title": "Executive Head",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Anmol Rana",
      "title": "Executive Head",
      "imgSrc": AnmolRana,
      "phone": 123
    },
    {
      "name": "Abhishek Kumar",
      "title": "Creative Head",
      "imgSrc": AbhishekKumar,
      "phone": 123
    },
    {
      "name": "Rituraj Prasad",
      "title": "Creative Head",
      "imgSrc": RiturajPrasad,
      "phone": 123
    },
    {
      "name": "Bhukya Nithin Kumar",
      "title": "Planning and Management Head",
      "imgSrc": BhukyaNitinKumar,
      "phone": 123
    },
    {
      "name": "Md. Mehtab Hussain",
      "title": "Planning and Management Head",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Amit Patel",
      "title": "Logistics Head",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Sunny Kumar",
      "title": "Logistics Head",
      "imgSrc": SunnyKumar,
      "phone": 123
    },
    {
      "name": "Upkar Kumar Mahto",
      "title": "Web and App Head",
      "imgSrc": UpkarKumarMahato,
      "phone": 123
    },
    {
      "name": "Shubham Kumar Singh",
      "title": "Web and App Head",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Divyansh Kumar Singh",
      "title": "Public Relation Head",
      "imgSrc": DivyanshuKumarSing,
      "phone": 123
    },
    {
      "name": "Pratham Kumar",
      "title": "Public Relation Head",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Durgesh Prakash",
      "title": "Medical Head",
      "imgSrc": "",
      "phone": 123
    },
    {
      "name": "Narne Srinadh",
      "title": "Medical Head",
      "imgSrc": Srinadh,
      "phone": 123
    },
    {
      "name": "Tarun Anand",
      "title": "Corporate Head",
      "imgSrc": "",
      "phone": 123
    }
  ];

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
