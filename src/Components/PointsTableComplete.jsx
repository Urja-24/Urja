import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SportsHeader from "./AnimatedHeading";
import Leaderboard from "./Leaderboard";

const PointTableComplete = () => {
  const [leader, setLeader] = useState([]);

  const [tableData, setTableData] = useState([]);

  const fetchCSVData = async () => {
    const csvUrl = "https://sheetdb.io/api/v1/ko441b71v1704";

    try {
      const response = await fetch(csvUrl, {
        method: "GET",
      });

      const data = await response.json();

      setTableData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCSVData();
  }, []);

  useEffect(() => {
    if (tableData.length > 0) {
      const teamScores = {};

      tableData.forEach((sport) => {
        Object.keys(sport).forEach((key) => {
          if (key !== "sport" && sport[key] !== "") {
            teamScores[key] = 0;
          }
        });
      });

      teamScores["ECM+PIE"] = teamScores["ECMPIE"];

      delete teamScores["ECMPIE"];

      setLeader(
        Object.entries(teamScores).map(([branch, points]) => ({
          branch: branch,

          points,
        }))
      );
    }
  }, [tableData]);
  return (
    <div className="mt-36 mb-4 container mx-auto px-4 ">
      <motion.h1
        className="text-center text-6xl font-extrabold text-white my-4 flex justify-center gap-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <SportsHeader heading={"POINTS"} />
        <SportsHeader heading={"TABLE"} />
      </motion.h1>
      <motion.div
        className="overflow-x-auto"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Leaderboard leaderboardData={leader} />
      </motion.div>
    </div>
  );
};

export default PointTableComplete;
