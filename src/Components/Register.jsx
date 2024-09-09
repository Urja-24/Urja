import React, { useState } from "react";
import SportsHeader from "./AnimatedHeading";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import data from "../assets/sports.json";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const { id } = useParams();
   const backendUrl = "https://urjabackend.onrender.com";
  //const backendUrl = "http://localhost:3080";
  // const sports = [
  //   "Basketball",
  //   "Football",
  //   "Cricket",
  //   "Tennis",
  //   "Yoga",
  //   "Chess",
  //   "Athletics",
  //   "Hockey",
  //   "Badminton",
  //   "Volleyball",
  //   "Table Tennis",
  // ];
  const branches = ["CE", "CSE", "MME", "ECE", "ME", "PIE+ECM", "PG", "EE"];
  const [formData, setFormData] = useState({
    playerName: "",
    registrationNumber: "",
    branch: "CSE",
    sport: data[id].title,
    sportId: id,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/player/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Form submitted successfully!");
        console.log("Form submitted successfully:", result);
      } else {
        toast.error("Cannot register twice ");
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      toast.error("Failed to submit form!");
      console.error("Error submitting form:", error);
    } finally {
      setFormData({
        playerName: "",
        registrationNumber: "",
        branch: "CSE",
        sport: data[id].title,
        sportId: id,
      });
    }
  };

  return (
    <div className="mt-40 p-4 text-white mx-5">
      <ToastContainer />
      <div>
        <SportsHeader heading={"Register"} />
      </div>
      <div className="mb-4">
        <span className="font-semibold text-yellow-400 mr-4">
          Register for:{" "}
        </span>
        {data[id].title}
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
            className="w-full p-2 border border-gray-300 rounded text-black"
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
            className="w-full p-2 border border-gray-300 rounded text-black"
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
            className="w-full p-2 border border-gray-300 rounded text-black"
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
