import React from "react";
import FrontDisplay from "./FrontDisplay";
import Leaderboard from "./Leaderboard";
import Sports from "./Sports";
import { Link } from "react-router-dom";
import SportsHeader from "./AnimatedHeading";
function Home() {
  return (
    <div>
      <FrontDisplay />
      <Sports />
      <div className="container mx-auto mt-8 py-4 px-8 border-t border-gray-600">
        <h2 className="text-[#F5DEB3] font-bold mb-2 text-3xl">
          Previous Year Point Table
        </h2>
        <Leaderboard />
      </div>
      <div className="my-2 ml-28">
        <Link to={"/Players"}>
          <button className="bg-[#333] text-[#F5DEB3] border border-[#333] px-6 py-3 rounded-sm font-semibold transition duration-300 ease-in-out transform hover:bg-[#444] hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#444] focus:ring-opacity-50">
            All Players
          </button>
        </Link>
        <div className="flex gap-5 w-full items-center justify-center my-5">
          <SportsHeader heading={"2k24 "} />
          <SportsHeader heading={"Points "} />
          <SportsHeader heading={"Table "} />
        </div>
        <Leaderboard />
      </div>
    </div>
  );
}

export default Home;
