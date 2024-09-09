import React from "react";

const Leaderboard = ({ leaderboardData }) => {
  return (
    <>
      <div className="mb-4">
        <div className="overflow-x-auto px-6 md:px-32">
          <table className="w-full table-auto border-collapse border border-gray-200">
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
                  key={index}
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
    </>
  );
};

export default Leaderboard;
