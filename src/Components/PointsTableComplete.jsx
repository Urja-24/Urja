import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SportsHeader from "./AnimatedHeading";
import Leaderboard from "./Leaderboard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

const PointTableComplete = () => {
  const [leader, setLeader] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchCSVData = async () => {
    const csvUrl =
      "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=dYYrITzDRkJWh9yjA4uqykpPvVsLHZCRuA6M1RP-DNp1A8Q4cakQzx-K2Sm0gCgrKP6oaH2La-G2WlpqacQdc0kwebZGpCOlOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJyuczKvgFAK-7H1hUXzI6qQ1PsFo-0VxwsRSGXshehoPhDYJcTxHFJKzLNmedmMmRwf9xw3HFB-ZIaZ6ymjRTaBWg9SUTYOYLPc_ScPTHfLrg&lib=MmaNCPjJ9zLiYbtGlxrYyQFkwFfR2TN0r";
    setLoading(true);
    try {
      const response = await fetch(csvUrl, {
        method: "GET",
      });

      const data = await response.json();
      setTableData(data);
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
          if (key !== "Sport" && sport[key] !== "") {
            teamScores[key] = (teamScores[key] || 0) + parseInt(sport[key], 10);
          }
        });
      });

      teamScores["ECM+PIE"] = teamScores["PIE+ECM"];

      delete teamScores["PIE+ECM"];

      setLeader(
        Object.entries(teamScores).map(([branch, points]) => ({
          branch,
          points,
        }))
      );
    }
  }, [tableData]);
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div>
        <Link to="/athletics-registration" className="flex justify-center items-baseline mt-6">
          <button
            className="flex gap-x-2 underline underline-offset-4 bg-[#F5DEB3] rounded shadow-md py-3 px-12 text-black hover:scale-110 transition-transform ease-linear duration-300 justify-center items-center"
          >
            <h3 className="text-lg text-center font-bold text-wrap">Register for athletics(only captain)</h3>
            <FontAwesomeIcon icon={faIdCard} className="text-3xl" />
          </button>
          {/* </div> */}
        </Link>
      </div>
      <div className="mt-24 mb-4 container mx-auto px-4 ">
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
    </div>
  );
};

export default PointTableComplete;