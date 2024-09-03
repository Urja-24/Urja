import { motion } from 'framer-motion';
import { AiFillStop } from 'react-icons/ai';
import { FaCircleXmark } from "react-icons/fa6";
import { FcApproval } from 'react-icons/fc';
import SportsHeader from './AnimatedHeading';
const tableData = [
    {
        Team: "CSE",
        Matchs: "3",
        Win: "",
        Lose: "",
        Draw: "1",
        Points: "",
        RecentForm:["W","D","L"],
    },
    {
            Team: "ECE",
            Matchs: "3",
            Win: "",
            Lose: "",
            Draw: "1",
            Points: "5",
            RecentForm:["W","D","L"],
    },
    {
            Team: "EE",
            Matchs: "4",
            Win: "4",
            Lose: "",
            Draw: "",
            Points: "",
            RecentForm:["W","W","L"],
    },
    {
            Team: "ME",
            Matchs: "1",
            Win: "",
            Lose: "",
            Draw: "3",
            Points: "5",
            RecentForm:["D","D","L"],
    },
    {
            Team: "CE",
            Matchs: "1",
            Win: "",
            Lose: "",
            Draw: "3",
            Points: "5",
            RecentForm:["D","D","L"],
    },
    {
            Team: "MME",
            Matchs: "1",
            Win: "",
            Lose: "",
            Draw: "3",
            Points: "5",
            RecentForm:["D","L","L"],
    },
    {
            Team: "PG",
            Matchs: "1",
            Win: "",
            Lose: "",
            Draw: "3",
            Points: "5",
            RecentForm:["W","D","L"],
    },
];

const SportPointsTable = ({title = "Points Table"}) => {
  return (
    <div className="mt-40 mb-4 container mx-auto px-4 ">
    <motion.h1
      className="text-center text-6xl font-extrabold text-white my-4 flex justify-center gap-x-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {
          title && title.split(" ").map ((word,i)=> <SportsHeader key={i} heading={word} />)
      }
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
              <th className="border border-gray-200 px-4 py-2">Teams</th>
              <th className="border border-gray-200 px-4 py-2">Matchs</th>
              <th className="border border-gray-200 px-4 py-2">Win</th>
              <th className="border border-gray-200 px-4 py-2">Lose</th>
                <th className="border border-gray-200 px-4 py-2">Draw</th>
                <th className="border border-gray-200 px-4 py-2">Points</th>
                <th className="border border-gray-200 px-4 py-2">RECENT FORM</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tableData.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.Team}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.Matchs}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.Win}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.Lose}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.Draw}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {row.Points}
                </td>
                <td className="border flex justify-center items-center gap-3 border-gray-200 px-4 py-2 text-center">
                  {row.RecentForm.map((form, i) => (
                    <span key={i} className="text-xl mx-1">
                        {form === "W" ? <FcApproval size={24} /> : form === "L" ?<FaCircleXmark color='#FF4433' />:<AiFillStop />
                         }
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

export default SportPointsTable
