import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SportsHeader from "./AnimatedHeading";
import Leaderboard from "./Leaderboard";

const PointTableComplete = () => {
  const [leader, setLeader] = useState([]);

  const [tableData, setTableData] = useState([]);

  const fetchCSVData = async () => {
    const csvUrl = "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=46yX1hc0ARYOwHK5gTFXjAWK65O48xmE90_o0VH8n0A96drpVuC4LDBNAvTqpKk7ojLo7YO48O1T0uq56wINqHcxw6rAd3TaOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJzxGb_0_p_rcV9ljeOqrCtN0fxgI8Z4EXlzzbmIoqvwtmgeKVZQXODeLuYAodKr9Mii3CckkNcDV9htNE0swXfxS3S5aiypj8vc_ScPTHfLrg&lib=MnIp_hJsaim4043qwUUaNJlkwFfR2TN0r";

    try {
      const response = await fetch(csvUrl, {
        method: "GET",
      });

      const data = await response.json();
      const fetchedData = await data.data;
       setTableData(fetchedData);
      
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
          if (key !== "Sport" && sport[key] !== "") {
            teamScores[key] = (teamScores[key] || 0) + parseInt(sport[key], 10);
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
