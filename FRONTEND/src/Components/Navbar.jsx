import "../CSS/Navbar.css"; // Optional: For custom styling
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar py-4 mx-auto text-[#F5DEB3]">
  <div className="navbar-container navbar flex justify-between items-center">
    <div>
      <NavLink to="/" className="text-2xl font-bold tracking-wide font-serif">
        URJA'25
      </NavLink>
    </div>
    <div className="menu-icon md:hidden mr-5" onClick={toggleMenu}>
      {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </div>
    <ul
      className={`navbar-list flex-col md:flex  md:justify-center md:flex-row md:space-x-8 text-lg font-medium ${
        isOpen ? "flex" : "hidden"
      } transition-all duration-300 ease-in-out`}
    >
      <li className="navbar-item mt-2 md:mt-0">
        <NavLink
          to="/"
          className="hover:text-[#FFD700] transition duration-300 ease-in-out"
        >
          Home
        </NavLink>
      </li>
      <li className="navbar-item mt-2 md:mt-0">
        <NavLink
          to="/matches"
          className="hover:text-[#FFD700] transition duration-300 ease-in-out"
        >
          Matches
        </NavLink>
      </li>

      <li className="navbar-item mt-2 md:mt-0">
        <NavLink
          to="/our-team"
          className="hover:text-[#FFD700] transition duration-300 ease-in-out"
        >
          Our Team
        </NavLink>
      </li>
      <li className="navbar-item mt-2 md:mt-0">
        <NavLink
          to="/detailed-points-table"
          className="hover:text-[#FFD700] transition duration-300 ease-in-out"
        >
          Detailed Points Table
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
