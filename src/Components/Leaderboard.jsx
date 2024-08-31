import React from "react";
import { Link } from "react-router-dom";
const Leaderboard = () => {
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
    <>
      <div className="mt-8 mb-4 container mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead
              style={{
                backgroundImage:
                  "url('https://i.postimg.cc/Vk7WZy9J/wooden-bg.jpg')",
                backgroundColor: "#333",
              }}
            >
              <tr className="text-white">
                <th className="border border-gray-200 px-4 py-2">Sr. No.</th>
                <th className="border border-gray-200 px-4 py-2">Branch</th>
                <th className="border border-gray-200 px-4 py-2">Points</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {leaderboardData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}
                >
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : index + 1}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    <strong>{item.branch}</strong>
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    {item.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-2 ml-28">
        <Link to={"/detailed-points-table"}>
          <button className="bg-[#333] text-[#F5DEB3] border border-[#333] px-6 py-3 rounded-sm font-semibold transition duration-300 ease-in-out transform hover:bg-[#444] hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#444] focus:ring-opacity-50">
            View Point Table
          </button>
        </Link>
      </div>
    </>
  );
};

export default Leaderboard;
