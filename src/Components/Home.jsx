import React from "react";
import FrontDisplay from "./FrontDisplay";
import Leaderboard from "./Leaderboard";
import Sports from "./Sports";
import { Link } from "react-router-dom";
import SportsHeader from "./AnimatedHeading";
import PointTableComplete from "./PointsTableComplete";

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
      <PointTableComplete/>
      <Sports />
        <div className="mt-4 pt-3 border-t border-gray-700 flex justify-center gap-x-4">
          <SportsHeader heading={"2k24 "} />
          <SportsHeader heading={"OVERALL"} />
          <SportsHeader heading={"Points"} />
        </div>
        <Leaderboard leaderboardData={leaderboardData} />
    </div>
  );
}

export default Home;
