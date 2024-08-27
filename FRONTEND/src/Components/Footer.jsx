import React from 'react'
import '../CSS/Footer.css'
import { Link } from 'react-router-dom'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black p-8 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center rounded-3xl">
          {/* Left Section */}
          <div className="left w-full md:w-1/2 flex">
            <div className="logo-con text-3xl font-bold pr-4">
              <p>Logo</p>
            </div>
            <div className="footer-content">
              <h3 className="text-2xl font-bold mb-2">URJA '25</h3>
              <p className="text-sm max-w-md leading-relaxed">
                Join us for a thrilling showcase of sportsmanship and camaraderie at NIT Jamshedpur. URJA '25 is not just a sports fest, it’s a celebration of energy, passion, and relentless spirit.
              </p>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="right w-full md:w-1/2 flex flex-col md:items-end mt-8 md:mt-0">
            {/* Links */}
            <div className="links flex flex-wrap justify-center md:justify-end gap-4 mb-8">
              <Link className="hover:text-[#FFD700] transition duration-300" to="/">Home</Link>
              <Link className="hover:text-[#FFD700] transition duration-300" to="/matches">Matches</Link>
              <Link className="hover:text-[#FFD700] transition duration-300" to="/gallery">Gallery</Link>
              <Link className="hover:text-[#FFD700] transition duration-300" to="/teams">Our Team</Link>
              <Link className="hover:text-[#FFD700] transition duration-300" to="/points-table">Points Table</Link>
            </div>
  
            {/* Social Media Icons */}
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
    )
}

export default Footer;
