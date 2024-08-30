import React, { useEffect, useState } from "react";
import SportsHeader from "./AnimatedHeading";
import { useParams } from "react-router-dom";

function Register() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    playerName: "",
    registrationNumber: "",
    branch: "CSE",
    sport : "" ,   
    sportId : id ,  
  });
  const sports = ["Cricket", "Football", "Hockey"];
  const branches = ["CE", "CSE", "MME", "ECE", "ME", "PIE+ECM", "PG", "EE"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, sport : sports[id] }); 
    console.log(formData); // Handle form submission here
  };

  return (
    <div className="mt-40 p-4 text-white mx-5">
      <div>
        <SportsHeader heading={"Register"} />
      </div>
      <div className="mb-4">
        <span className="font-semibold text-yellow-400 mr-4">
          Register for:{" "}
        </span>
        {sports[id]}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-yellow-400 font-semibold mb-2">
            Player Name:
          </label>
          <input
            type="text"
            name="playerName"
            value={formData.playerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter player name"
            required
          />
        </div>
        <div>
          <label className="block text-yellow-400 font-semibold mb-2">
            Registration Number:
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Registration number e.g. 2022UGCS006"
            required
          />
        </div>
        <div>
          <label className="block text-yellow-400 font-semibold mb-2">
            Branch:
          </label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option value={branch} key={index}>
                {branch}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
