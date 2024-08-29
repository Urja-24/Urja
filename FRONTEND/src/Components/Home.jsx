import React from "react";
import FrontDisplay from "./FrontDisplay";
import Leaderboard from "./Leaderboard";
import Sports from "./Sports";

function Home() {
  return (
    <div>
      <FrontDisplay />
      <Sports />
      <Leaderboard />
    </div>
  );
}

export default Home;
