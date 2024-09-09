import React, { useEffect, useState } from "react";
import SportsHeader from "./AnimatedHeading";

const PointTable = () => {
  const [selectedTeam, setSelectedTeam] = useState("CSE");
  const [tableData, setTableData] = useState([]);

  const fetchCSVData = async () => {
    const csvUrl =
      "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=46yX1hc0ARYOwHK5gTFXjAWK65O48xmE90_o0VH8n0A96drpVuC4LDBNAvTqpKk7ojLo7YO48O1T0uq56wINqHcxw6rAd3TaOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJzxGb_0_p_rcV9ljeOqrCtN0fxgI8Z4EXlzzbmIoqvwtmgeKVZQXODeLuYAodKr9Mii3CckkNcDV9htNE0swXfxS3S5aiypj8vc_ScPTHfLrg&lib=MnIp_hJsaim4043qwUUaNJlkwFfR2TN0r";
    try {
      const response = await fetch(csvUrl, {
        method: "GET",
      });
      const data = await response.json();
      const fetchedData = await data;
      console.log(fetchedData);
      setTableData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCSVData();
  }, []);

  return (
    <div className="mt-40 mb-4 container mx-auto px-4">
      <h1 className="flex gap-x-6 justify-center ">
        <SportsHeader heading={"POINT"} />
        <SportsHeader heading={"TABLE"} />
      </h1>
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
              <th className="border border-gray-200 px-4 py-2">Positions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className={`${1 % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}>
              <td className="border border-gray-200 px-4 py-2 text-center">
                Football
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <li className="list-none text-start border-b mt-1">🥇 CSE</li>
                <li className="list-none text-start border-b mt-1">🥈 ECE</li>
                <li className="list-none text-start mt-1">🥉 EE</li>
              </td>
            </tr>
            <tr className={`${2 % 2 === 0 ? "bg-[#444]" : "bg-[#555]"}`}>
              <td className="border border-gray-200 px-4 py-2 text-center">
                Volleyball
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <li className="list-none text-start border-b mt-1">🥇 ECM+PIE</li>
                <li className="list-none text-start border-b mt-1">🥈 ECE</li>
                <li className="list-none text-start mt-1">🥉 EE</li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointTable;
