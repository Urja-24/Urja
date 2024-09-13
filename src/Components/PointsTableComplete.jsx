import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SportsHeader from "./AnimatedHeading";
import Leaderboard from "./Leaderboard";

const PointTableComplete = () => {
  const [leader, setLeader] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchCSVData = async () => {
    const csvUrl =
      "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=46yX1hc0ARYOwHK5gTFXjAWK65O48xmE90_o0VH8n0A96drpVuC4LDBNAvTqpKk7ojLo7YO48O1T0uq56wINqHcxw6rAd3TaOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJzxGb_0_p_rcV9ljeOqrCtN0fxgI8Z4EXlzzbmIoqvwtmgeKVZQXODeLuYAodKr9Mii3CckkNcDV9htNE0swXfxS3S5aiypj8vc_ScPTHfLrg&lib=MnIp_hJsaim4043qwUUaNJlkwFfR2TN0r";
    setLoading(true);
    try {
      const response = await fetch(csvUrl, {
        method: "GET",
      });

      const data = await response.json();
      const fetchedData = await data.data;
      setTableData(fetchedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
          if (key !== "Event" && sport[key] !== "") {
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
        <SportsHeader heading={"OVERALL"} />
        <SportsHeader heading={"POINTS"} />
      </motion.h1>
      {loading ? (
        <div className="flex justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <motion.div
          className="overflow-x-auto"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Leaderboard leaderboardData={leader} />
        </motion.div>
      )}
    </div>
  );
};

export default PointTableComplete;
