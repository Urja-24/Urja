import React, { useState } from "react";
import SportsHeader from "./AnimatedHeading";
import SportPointsTable from "./SportPointsTable";
import { Link, useParams } from "react-router-dom";
import data from "../assets/sports.json";
import Modal from "./Modal";
import SportsPointTable from "./CustomSportsTable";
import { AiOutlineLogin } from "react-icons/ai";

function CustomSport() {
  const { key } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [ruleKey, setRuleKey] = useState(null);

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


        <div className="max-w-[75vw] flex justify-center items-center mx-auto">
          <Link className="container mx-4" to={`/register/${key}`}>
            {/* Added a leading slash to ensure it navigates from the base URL */}
            <button className="bg-yellow-600 flex-1 flex justify-center items-center gap-2 text-white font-semibold py-3 px-12 rounded hover:bg-yellow-500">
              Register<AiOutlineLogin />
            </button>
          </Link>
        </div>

        <div className="container mx-auto p-4">
        <h2 className="text-[#F5DEB3] mb-2 underline underline-offset-4 text-xl">
            Points Table
          </h2>
          <SportPointsTable />
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-[#F5DEB3] mb-2 underline underline-offset-4 text-xl">
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
        <SportsPointTable Title="Point Table" />
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-[#F5DEB3] mb-2 underline underline-offset-4 text-xl">
            Rulebook
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(data[key].rules).map((ruleKey, index) => (
              <div
                key={index}
                className="bg-[#F5DEB3] rounded-lg shadow-md p-4 text-black hover:scale-110 transition-transform ease-linear duration-300"
              >
                <h3 className="text-lg font-bold">{ruleKey}</h3>

                <button
                  className="underline underline-offset-4"
                  onClick={() => {
                    setIsOpen(true);
                    setRuleKey(ruleKey);
                  }}
                >
                  view
                </button>
              </div>
            ))}
          </div>
        </div>

        {isOpen && (
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h2 className="text-lg font-bold text-white">{ruleKey}</h2>

            <ul>
              {data[key].rules[ruleKey].map((rule, index) => (
                <li key={index} className="text-sm text-white">
                  {rule}
                </li>
              ))}
            </ul>
          </Modal>
        )}

        
      </div>
    </div>
  );
}

export default CustomSport;
