import { motion } from "framer-motion";
import React from "react";
import SportsHeader from "./AnimatedHeading";

const PointTableComplete = () => {
  const tableData = [
    {
      sport: "100M (BOYS)",
      CSE: "",
      ECE: "",
      EE: "",
      ME: "1",
      CE: "",
      MME: "3",
      "PIE+ECM": "",
      PG: "5",
    },
    {
      sport: "100M (GIRLS)",
      CSE: "3",
      ECE: "",
      EE: "",
      ME: "1",
      CE: "5",
      MME: "",
      "PIE+ECM": "",
      PG: "",
    },
    {
      sport: "200M (BOYS)",
      CSE: "",
      ECE: "4",
      EE: "",
      ME: "",
      CE: "",
      MME: "5",
      "PIE+ECM": "",
      PG: "",
    },
    {
      sport: "200M (GIRLS)",
      CSE: "1",
      ECE: "",
      EE: "",
      ME: "3",
      CE: "5",
      MME: "",
      "PIE+ECM": "",
      PG: "",
    },
  ];

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
        <table className="min-w-full table-auto border-collapse border border-gray-500">
          <thead
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/Vk7WZy9J/wooden-bg.jpg')",
              backgroundColor: "#333",
            }}
          >
            <tr className="text-white">
              <th className="border border-gray-200 px-4 py-2">Sports</th>
              <th className="border border-gray-200 px-4 py-2">CSE</th>
              <th className="border border-gray-200 px-4 py-2">ECE</th>
              <th className="border border-gray-200 px-4 py-2">EE</th>
              <th className="border border-gray-200 px-4 py-2">ME</th>
              <th className="border border-gray-200 px-4 py-2">CE</th>
              <th className="border border-gray-200 px-4 py-2">MME</th>
              <th className="border border-gray-200 px-4 py-2">ECM+PIE</th>
              <th className="border border-gray-200 px-4 py-2">PG</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tableData.map((row, index) => (
              <tr className={`${index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.sport}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.CSE}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.ECE}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.EE}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.ME}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.CE}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.MME}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row["PIE+ECM"]}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.PG}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default PointTableComplete;
