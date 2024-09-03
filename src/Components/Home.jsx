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
      <div className="flex gap-5 w-full items-center justify-center my-5">
        <SportsHeader heading={"2k24 "} /> 
        <SportsHeader heading={"Points "} /> 
        <SportsHeader heading={"Table "} /> 
      </div>
      <Leaderboard />
      
    </div>
  );
}

export default Home;
