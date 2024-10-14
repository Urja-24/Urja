import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SportsPointTable = ({ Title, sportName, tableData }) => {
  return (
    <div className="mt-8 mb-4 container mx-auto px-4">

      <h2 className="text-[#F5DEB3] mb-4 underline underline-offset-4 text-xl">

        {Title}

      </h2>

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

              <th className="border border-gray-200 px-4 py-2">Team</th>

              <th className="border border-gray-200 px-4 py-2">Points</th>

            </tr>

          </thead>

          <tbody className="text-white">

            {tableData.map((row, index) => (

              <tr key={index} className={`${index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}>

                <td className="border border-gray-200 px-4 py-2 text-center">

                  {row.team}

                </td>

                <td className="border border-gray-200 px-4 py-2 text-center">

                  {row.points}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </motion.div>

    </div>

  );

};
SportsPointTable.propTypes = {
  Title: PropTypes.string.isRequired,
};

export default SportsPointTable;