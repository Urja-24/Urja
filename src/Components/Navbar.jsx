import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/Urja.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{ backgroundImage: "url('https://i.postimg.cc/Vk7WZy9J/wooden-bg.jpg')" }}
      className="bg-[#1E1E1E] text-[#F5DEB3] overflow-x-hidden w-full scroll"
    >
      {/* Logo Section */}
      <div className="w-full flex justify-center items-center py-4">
        <NavLink
          to="/"
          className="font-extrabold text-[#F5DEB3]"
        >
          <img className='h-16' src={logo} alt="Urja Logo" />
          <p className='text-center'>Student Activity Centre</p>
        </NavLink>
      </div>

      {/* Navbar Links Section for Desktop */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 mx-auto max-w-7xl">
        <ul className="flex md:flex-row md:justify-center md:w-full md:space-x-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 pb-2 border-white'
                  : 'hover:text-white transition duration-300 ease-in-out'
              }

            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/points-table"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 pb-2 border-white'
                  : 'hover:text-white transition duration-300 ease-in-out'
              }
            >
              Detailed Points Table
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/our-team"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 pb-2 border-white'
                  : 'hover:text-white transition duration-300 ease-in-out'
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 pb-2 border-white'
                  : 'hover:text-white transition duration-300 ease-in-out'
              }


            >
              Gallery
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/detailed-points-table"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 pb-2 border-white'
                  : 'hover:text-white transition duration-300 ease-in-out'
              }
            >
              SportsWise Winners
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/Players"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 pb-2 border-white'
                  : 'hover:text-white transition duration-300 ease-in-out'
              }
            >
              All Players 
            </NavLink>
          </li> */}


        </ul>
      </div>

      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <div className="absolute top-6 right-2 md:hidden cursor-pointer px-4 py-2" onClick={toggleMenu}>
        {!isOpen && <FaBars size={28} className="text-white" />}

      </div>

      {/* Popup Navigation for Mobile */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4 }}
          className="fixed top-0 right-0 bottom-0 w-3/4 bg-[#1E1E1E] text-[#F5DEB3] shadow-lg z-50 flex flex-col p-8"
        >
          <div className="flex justify-end">
            <FaTimes
              size={28}
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col space-y-6 mt-8 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 pb-2 border-white'
                    : 'hover:text-white transition duration-300 ease-in-out'
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 pb-2 border-white'
                    : 'hover:text-white transition duration-300 ease-in-out'
                }
                onClick={toggleMenu}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-team"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 pb-2 border-white'
                    : 'hover:text-white transition duration-300 ease-in-out'
                }
                onClick={toggleMenu}
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/detailed-points-table"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 pb-2 border-white'
                    : 'hover:text-white transition duration-300 ease-in-out'
                }
                onClick={toggleMenu}
              >
                Detailed Points Table
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/points-table"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 pb-2 border-white'
                    : 'hover:text-white transition duration-300 ease-in-out'
                }
              >
                Points Table
              </NavLink>
            </li>
            {/* <li>
            <NavLink
              to="/Players"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 pb-2 border-white'
                  : 'hover:text-white transition duration-300 ease-in-out'
              }
            >
              All Players 
            </NavLink>
          </li> */}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
