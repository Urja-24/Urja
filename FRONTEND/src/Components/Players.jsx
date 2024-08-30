import React, { useState } from "react";
import SportsHeader from "./AnimatedHeading";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { jsPDF } from "jspdf";
import "react-toastify/dist/ReactToastify.css";
import "jspdf-autotable";

function Register() {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  const sports = ["Cricket", "Football", "Hockey"];
  const branches = ["CE", "CSE", "MME", "ECE", "ME", "PIE+ECM", "PG", "EE"];
  const [formData, setFormData] = useState({
    branch: "CSE",
    sport: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3080/api/player/getPlayers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        toast.success("Form submitted successfully!");
        setPlayers(result.players);
      } else {
        toast.error("Failed to submit form!");
      }
    } catch (error) {
      toast.error("Error submitting form!");
    } finally {
      setFormData({
        branch: "CSE",
        sport: "",
      });
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Players List", 20, 10);
    doc.autoTable({
      head: [["Player Name", "Registration Number", "Branch", "Sport", "Sport ID"]],
      body: players.map((player) => [
        player.playerName,
        player.registrationNumber,
        player.branch,
        player.sport,
        player.sportId,
      ]),
    });
    doc.save("players_list.pdf");
  };

  return (
    <div className="mt-40 p-4 text-white mx-5">
      <ToastContainer />
      <div className="flex gap-5 items-center justify-center">
        <SportsHeader heading={"All "} />
        <SportsHeader heading={"Players"} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-yellow-400 font-semibold mb-2">
            Sport :
          </label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          >
            <option value="">Select Sport</option>
            {sports.map((sport, index) => (
              <option value={sport} key={index}>
                {sport}
              </option>
            ))}
          </select>
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
          Get Players
        </button>
        {players.length > 0 && (
          <button
            onClick={downloadPDF}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-4"
          >
            Download PDF
          </button>
        )}
      </form>

      {players.length > 0 && (
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full text-white">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-2 border border-gray-500">Player Name</th>
                <th className="p-2 border border-gray-500">Registration Number</th>
                <th className="p-2 border border-gray-500">Branch</th>
                <th className="p-2 border border-gray-500">Sport</th>
                <th className="p-2 border border-gray-500">Sport ID</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={index} className="bg-gray-800">
                  <td className="p-2 border border-gray-500">{player.playerName}</td>
                  <td className="p-2 border border-gray-500">{player.registrationNumber}</td>
                  <td className="p-2 border border-gray-500">{player.branch}</td>
                  <td className="p-2 border border-gray-500">{player.sport}</td>
                  <td className="p-2 border border-gray-500">{player.sportId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Register;
