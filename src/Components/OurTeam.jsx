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
import DurgeshPrakash from '../assets/CoreTeam/DurgeshPrakash.webp'
import Subhamkumarchaudhary from '../assets/CoreTeam/SubhamKumarchaudhary.webp'
import SubhakumarSingh from '../assets/CoreTeam/SubhamKumarSingh.webp'
import VinayBihari from '../assets/CoreTeam/VinayBihari.webp'
import TarunAanand from '../assets/CoreTeam/TarunAnand.webp'
import MdMehtab from '../assets/CoreTeam/MdMehtab.webp'
import JyotiKumari from '../assets/CoreTeam/JyotiKumari.webp'
import PrathamKumar from '../assets/CoreTeam/PrathamKumar.webp'
import Rohit from '../assets/CoreTeam/Rohit.webp'
import Krishna from '../assets/CoreTeam/Krishna.webp'
import Amit from '../assets/CoreTeam/Amit.webp'
function OurTeam() {
 const userImage='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
  const members = [
    {
      "name": "Rohit Sharma",
      "title": "Sports Secretary",
      "imgSrc": Rohit || userImage,
      "phone": 1234567890
    },
    {
      "name": "Jyoti Kumari",
      "title": "Joint Sports Secretary",
      "imgSrc": JyotiKumari || userImage,
      "phone": 123
    },
    {
      "name": "Harshit Raj",
      "title": "Joint Sports Secretary",
      "imgSrc": HarshitRaj || userImage,
      "phone": 123
    },
    {
      "name": "Shubham Kumar Choudhary",
      "title": "General Secretary",
      "imgSrc": Subhamkumarchaudhary || userImage,
      "phone": 123
    },
    {
      "name": "Avinash Ranjan",
      "title": "General Secretary",
      "imgSrc": AvinashRanjan || userImage,
      "phone": 123
    },
    {
      "name": "Aditya Sonkar",
      "title": "Joint Secretary",
      "imgSrc": AdityaSonkar || userImage,
      "phone": 123
    },
    {
      "name": "Nishant Kumar Tiwary",
      "title": "Joint Secretary",
      "imgSrc": NishantKumarTiwary || userImage,
      "phone": 123
    },
    {
      "name": "Krishna Kumar Gupta",
      "title": "Event Head",
      "imgSrc": Krishna || userImage,
      "phone": 123
    },
    {
      "name": "Priya Sharma",
      "title": "Event Head",
      "imgSrc": PriyaSharma || userImage,
      "phone": 123
    },
    {
      "name": "Upkar Kumar Mahto",
      "title": "Web and App Head",
      "imgSrc": UpkarKumarMahato || userImage,
      "phone": 123
    },
    {
      "name": "Shubham Kumar Singh",
      "title": "Web and App Head",
      "imgSrc": SubhakumarSingh || userImage,
      "phone": 123
    },
    {
      "name": "Vinay Bihari",
      "title": "Executive Head",
      "imgSrc": VinayBihari || userImage,
      "phone": 123
    },
    {
      "name": "Anmol Rana",
      "title": "Executive Head",
      "imgSrc": AnmolRana || userImage,
      "phone": 123
    },
    {
      "name": "Abhishek Kumar",
      "title": "Creative Head",
      "imgSrc": AbhishekKumar|| userImage,
      "phone": 123
    },
    // {
    //   "name": "Rituraj Prasad",
    //   "title": "Creative Head",
    //   "imgSrc": RiturajPrasad || userImage,
    //   "phone": 123
    // },
    {
      "name": "Bhukya Nithin Kumar",
      "title": "Planning and Management Head",
      "imgSrc": BhukyaNitinKumar || userImage,
      "phone": 123
    },
    {
      "name": "Md. Mehtab Hussain",
      "title": "Planning and Management Head",
      "imgSrc": MdMehtab || userImage,
      "phone": 123
    },
    {
      "name": "Amit Patel",
      "title": "Logistics Head",
      "imgSrc": Amit || userImage,
      "phone": 123
    },
    {
      "name": "Sunny Kumar",
      "title": "Logistics Head",
      "imgSrc": SunnyKumar || userImage,
      "phone": 123
    },
    {
      "name": "Divyansh Kumar Singh",
      "title": "Public Relation Head",
      "imgSrc": DivyanshuKumarSing || userImage,
      "phone": 123
    },
    {
      "name": "Pratham Kumar",
      "title": "Public Relation Head",
      "imgSrc": PrathamKumar || userImage,
      "phone": 123
    },
    {
      "name": "Durgesh Prakash",
      "title": "Medical Head",
      "imgSrc": DurgeshPrakash || userImage,
      "phone": 123
    },
    {
      "name": "Narne Srinadh",
      "title": "Medical Head",
      "imgSrc": Srinadh || userImage,
      "phone": 123
    },
    {
      "name": "Tarun Anand",
      "title": "Corporate Head",
      "imgSrc": TarunAanand || userImage,
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
