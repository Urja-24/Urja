import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SportsHeader from "./AnimatedHeading";

const DetailedPointTable = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

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

  const filteredData =
    tableData.length > 0
      ? tableData.filter((item) => {
          if (selectedSport && item.Sport !== selectedSport) return false;

          if (selectedBranch && !item[selectedBranch]) return false;

          return true;
        })
      : [];

  return (
    <div className="mt-40 mb-4 container mx-auto px-4 ">
      <motion.h1
        className="text-center text-6xl font-extrabold text-white my-4 flex justify-center gap-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <SportsHeader heading={"DETAILED"} />
        <SportsHeader heading={"POINTS"} />
      </motion.h1>
      <div className="mb-4">
        <div className="overflow-x-auto px-6 md:px-32">
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
            <>
              <div className="flex flex-wrap justify-between gap-y-4 md:gap-x-4 mb-4">
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="bg-white border border-gray-200 rounded py-2 px-4 w-full md:w-1/3"
                >
                  <option value="">Select Sport</option>
                  {Array.from(new Set(tableData.map((item) => item.Sport))).map(
                    (sport) => (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    )
                  )}
                </select>

                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="bg-white border border-gray-200 rounded py-2 px-4 w-full md:w-1/3"
                >
                  <option value="">Select Branch</option>
                  {Array.from(
                    new Set(
                      tableData[0] &&
                        Object.keys(tableData[0]).filter(
                          (key) => key !== "Sport"
                        )
                    )
                  ).map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead
                  style={{
                    backgroundImage:
                      "url('https://i.postimg.cc/Vk7WZy9J/wooden-bg.jpg')",

                    backgroundColor: "#333",
                  }}
                >
                  <tr className="text-white">
                    <th className="border border-gray-200 px-4 py-2">SPORTS</th>
                    <th className="border border-gray-200 px-4 py-2">CSE</th>
                    <th className="border border-gray-200 px-4 py-2">ECE</th>
                    <th className="border border-gray-200 px-4 py-2">EE</th>
                    <th className="border border-gray-200 px-4 py-2">ME</th>
                    <th className="border border-gray-200 px-4 py-2">CE</th>
                    <th className="border border-gray-200 px-4 py-2">MME</th>
                    <th className="border border-gray-200 px-4 py-2">
                      ECM+PIE
                    </th>
                    <th className="border border-gray-200 px-4 py-2">PG</th>
                  </tr>
                </thead>

                <tbody className="text-white">
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"
                      }`}
                    >
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.Sport}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.CSE}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.ECE}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.EE}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.ME}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.CE}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.MME}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item["PIE+ECM"]}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {item.PG}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default DetailedPointTable;
