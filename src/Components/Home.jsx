import React from "react";
import FrontDisplay from "./FrontDisplay";
import Leaderboard from "./Leaderboard";
import Sports from "./Sports";
import { Link } from "react-router-dom";
import SportsHeader from "./AnimatedHeading";
function Home() {
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
      <Sports />
      <div className="my-2 ml-28">
        <Link to={"/Players"}>
          {/* <button className="bg-[#333] text-[#F5DEB3] border border-[#333] px-6 py-3 rounded-sm font-semibold transition duration-300 ease-in-out transform hover:bg-[#444] hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#444] focus:ring-opacity-50"> */}
            {/* All Players */}
          {/* </button> */}
        </Link>
        <div className="flex gap-x-5 w-full items-center justify-center">
          <SportsHeader heading={"2k24 "} />
          <SportsHeader heading={"Points "} />
          <SportsHeader heading={"Table "} />
        </div>
        <Leaderboard leaderboardData={leaderboardData} />
      </div>
    </div>
  );
}

export default Home;
