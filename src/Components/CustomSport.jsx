import React from "react";
import SportsHeader from "./AnimatedHeading";
import { Link, useParams } from "react-router-dom";
import data from "../assets/sports.json";
import SportsPointTable from "./CustomSportsTable";
import { AiOutlineLogin } from "react-icons/ai";

const tableData = [
  {
    Branch: "CSE",
    Position: "🥇",
    Score: 100,
  },
  {
    Branch: "ECM+PIE",
    Position: "🥈",
    Score: 96,
  },
  {
    Branch: "EE",
    Position: "🥉",
    Score: 87,
  },
];

function CustomSport() {
  const { key } = useParams();

  return (
    <div className="mt-40">
      <div>
        <SportsHeader heading={data[key].title} />
      </div>

      <div className="text-white px-2 md:max-w-[75vw] mx-auto">
        <div>
          <p className="mb-2 mx-6">
            " {data[key].quote} "<br />
            {data[key].description}
          </p>
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-[#F5DEB3] mb-4 underline underline-offset-4 text-xl">
            Sports Coordinator
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data[key].coordinator.map((ele, index) => (
              <div key={index} className="avatar">
                <img
                  src={ele.image}
                  alt={`Sports Coordinator ${index + 1}`}
                  loading="lazy"
                  className="h-32 w-32 md:h-40 md:w-40 object-cover mx-auto rounded-full"
                />

                <div className="text-center mt-2">
                  <h3 className="text-lg font-bold">{ele.name}</h3>

                  <p className="text-sm">{ele.position}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-8">
            <h2 className="text-[#F5DEB3] mb-4 underline underline-offset-4 text-xl">
              Previous Year's Results
            </h2>
            <table className="min-w-full table-auto border-collapse border border-gray-500">
              <thead
                style={{
                  backgroundImage:
                    "url('https://i.postimg.cc/Vk7WZy9J/wooden-bg.jpg')",
                  backgroundColor: "#333",
                }}
              >
                <tr className="text-white">
                  <th className="border border-gray-200 px-4 py-2">Position</th>
                  <th className="border border-gray-200 px-4 py-2">Team</th>
                  <th className="border border-gray-200 px-4 py-2">Score</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}
                  >
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      {row.Position}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      {row.Branch}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      {row.Score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-[75vw] flex justify-center mt-4">
          <Link className="mx-4" to={`/register/${key}`}>
            {/* Added a leading slash to ensure it navigates from the base URL */}
            <button className="bg-yellow-600 flex-1 flex justify-center items-center gap-2 text-white font-semibold py-3 px-12 rounded hover:bg-yellow-500">
              Register
              <AiOutlineLogin />
            </button>
          </Link>
        </div>
          <SportsPointTable Title="Point Table" />
        </div>

        <div className="flex justify-center">
          <div className="bg-[#F5DEB3] rounded shadow-md py-3 px-12 text-black hover:scale-110 transition-transform ease-linear duration-300">
            <button
              className="flex gap-x-2 underline underline-offset-4"
              onClick={() => {}}
            >
              <h3 className="text-lg text-center font-bold">Rulebook</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSport;
