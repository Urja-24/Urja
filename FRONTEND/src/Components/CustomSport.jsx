import React from "react";
import SportsHeader from "./AnimatedHeading";
import { Link, useParams } from "react-router-dom";

function CustomSport() {
  const { key } = useParams();

  return (
    <div className="mt-40">
      <div>
        <SportsHeader heading={"Custom_Sport_Page"} />
      </div>
      <div className="text-white">
        Id : {key}
      </div>
      <div>
        <Link to={`/register/${key}`}>
          {/* Added a leading slash to ensure it navigates from the base URL */}
          <button className="bg-yellow-600 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-500">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CustomSport;
