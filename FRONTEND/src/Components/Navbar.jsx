// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css'; // Optional: For custom styling
const Navbar = () => {
  return (
    <nav className="navbar mx-14 rounded-full py-2">
      <ul className="navbar-list flex justify-evenly text-2xl">
      <li className="navbar-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Logo
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/matches" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Matches
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/our-team" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Our Team
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/detailed-points-table" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Detailed Points Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
