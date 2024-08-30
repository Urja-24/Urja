import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/Urja.png';

function Footer() {

  return (
    <footer className="bg-black p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center rounded-3xl">
        <div className="left w-full md:w-1/2 flex">
          <div className="footer-content">
          <img className="h-12" src={logo} />
            <p className="text-sm max-w-md leading-relaxed">
              Join us for a thrilling showcase of sportsmanship and camaraderie
              at NIT Jamshedpur. URJA '25 is not just a sports fest, it’s a
              celebration of energy, passion, and relentless spirit.
            </p>

          </div>
        </div>

        <div className="right w-full md:w-1/2 flex flex-col md:items-end mt-8 md:mt-0">
          <div className="links flex flex-wrap justify-center md:justify-end gap-4 mb-8">
            <Link
              className="hover:text-[#FFD700] transition duration-300"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-[#FFD700] transition duration-300"
              to="/matches"
            >
              Matches
            </Link>
           
            <Link
              className="hover:text-[#FFD700] transition duration-300"
              to="/our-team"
            >
              Our Team
            </Link>
            <Link
              className="hover:text-[#FFD700] transition duration-300"
              to="/detailed-points-table"
            >
              Points Table
            </Link>
          </div>

          <div className="socials flex justify-center md:justify-end gap-6 text-2xl">
            <FaFacebook className="hover:text-[#FFD700] cursor-pointer transition duration-300" />
            <FaTwitter className="hover:text-[#FFD700] cursor-pointer transition duration-300" />
            <FaInstagram className="hover:text-[#FFD700] cursor-pointer transition duration-300" />
            <FaYoutube className="hover:text-[#FFD700] cursor-pointer transition duration-300" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm opacity-75">
        © 2024 URJA Sports Event. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
