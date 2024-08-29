import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css'; // Optional: For custom styling
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar rounded-full py-2 w-9/12 mx-auto">
      <div className="navbar-container flex justify-between items-center">
        <div className="logo">
          <NavLink to="/" className="text-2xl font-bold p- 6">
           Logo
          </NavLink>
        </div>
        <div className="menu-icon md:hidden mr-5" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`navbar-list flex-col md:flex md:flex-row md:justify-evenly text-2xl ${isOpen ? 'flex' : 'hidden'
            }`}
        >
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/gallary" className={({ isActive }) => (isActive ? 'active' : '')}>
              Gallary
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/matches" className={({ isActive }) => (isActive ? 'active' : '')}>
              Matches
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/team" className={({ isActive }) => (isActive ? 'active' : '')}>
              Our Team
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/detailed-points-table" className={({ isActive }) => (isActive ? 'active' : '')}>
              Detailed Points Table
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
