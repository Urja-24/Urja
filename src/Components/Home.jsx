import React, { useState } from "react";
import FrontDisplay from "./FrontDisplay";
import Leaderboard from "./Leaderboard";
import Sports from "./Sports";
import { Link } from "react-router-dom";
import SportsHeader from "./AnimatedHeading";
import PointTableComplete from "./PointsTableComplete";
import FormComponent from "../Components/FormComponent";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const leaderboardData = [
    { id: 1, branch: "CE", points: 106.5 },
    { id: 2, branch: "CSE", points: 103 },
    { id: 3, branch: "MME", points: 93 },
    { id: 4, branch: "ECE", points: 85.5 },
    { id: 5, branch: "ME", points: 84 },
    { id: 6, branch: "ECM+PIE", points: 71 },
    { id: 7, branch: "PG", points: 66 },
    { id: 8, branch: "EE", points: 52 },
  ];

  return (
    <div>
      <FrontDisplay />
      <div className="text-center">
      <button 
        onClick={() => setIsModalOpen(true)} 
        className="mt-4 px-4 py-2 bg-[#F5DEB3] text-black rounded hover:bg-blue-700"
      >
        Open Registration Form
      </button>
      </div>
      <PointTableComplete />
      <Sports />
      <div className="mt-4 pt-3 border-t border-gray-700 flex justify-center gap-x-4">
        <SportsHeader heading={"2k24 "} />
        <SportsHeader heading={"OVERALL"} />
        <SportsHeader heading={"Points"} />
      </div>
      <Leaderboard leaderboardData={leaderboardData} />

      {isModalOpen && (

<div className="z-50 fixed inset-0 top-10 md:top-28 flex items-center justify-center bg-black bg-opacity-50">

  <div className="p-6 md:p-8 rounded shadow-lg max-w-sm w-full relative">

    <button 

      onClick={() => setIsModalOpen(false)} 

      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"

    >

      &times;

    </button>

    <FormComponent onClose={() => setIsModalOpen(false)} />

  </div>

</div>

)}
    </div>
  );
}

export default Home;