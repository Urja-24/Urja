import React, { useState } from "react";
import SportsHeader from "./AnimatedHeading";

const PointTable = () => {
  const [selectedTeam, setSelectedTeam] = useState("CSE"); // default team selection

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

  const teams = ["CSE", "ECE", "EE", "ME", "CE", "MME", "PIE+ECM", "PG"];

  return (
    <div className="mt-40 mb-4 container mx-auto px-4">
      <h1 className="flex gap-x-6 justify-center">
        <SportsHeader heading={"POINT"} />
        <SportsHeader heading={"TABLE"} />
      </h1>
      <div className="flex flex-col gap-y-2 mb-4">
  <label
    className="text-lg font-bold text-[#F5DEB3] mb-1"
    htmlFor="team"
  >
    Select Team
  </label>
  <select
    name="team"
    id="team"
    value={selectedTeam}
    onChange={(e) => setSelectedTeam(e.target.value)}
    className="py-2 px-4 border border-gray-300 rounded-md text-lg bg-gray-200"
  >
    {teams.map((team) => (
      <option value={team}>{team}</option>
    ))}
  </select>
</div>
      <div className="overflow-x-auto">
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
              <th className="border border-gray-200 px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tableData.map((row, index) => (
              <tr
                className={`${index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}
              >
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.sport}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row[selectedTeam]} {/* display score for selected team */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointTable;