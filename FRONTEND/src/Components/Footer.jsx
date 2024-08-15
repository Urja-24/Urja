import React from 'react'
import '../CSS/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-black p-4'>
            <div className="main-footer p-4 rounded-3xl flex flex-row justify-around">
                <div className="left flex flex-row pr-2 border-red-300 w-1/2 text-white">
                    <div className="logo-con">
                        Logo
                    </div>
                    <div className="container flex flex-col pl-4 w-1/2">
                        <div className="text-white text-xl pt-3">
                            <p className="para-head text-right">URJA'25</p>
                        </div>
                        <div className="para text-white text-sm text-right">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eum velit labore architecto impedit sint iure ut possimus adipisci accusantium!.................. content
                        </div>
                    </div>
                </div>
                <div className="right flex flex-col">
                    <div className="links flex justify-around pt-3 gap-3">
                        <div>
                            <Link aria-current="page" className="text-white px-3 active" to="/">Home</Link>
                        </div>
                        <div>
                            <Link className="text-white px-3" to="/gallery">Matches</Link>
                        </div>
                        <div>
                            <Link className="text-white px-3" to="/gallery">Gallery</Link>
                        </div>
                        <div>
                            <Link className="text-white px-3" to="/teams">Our Team</Link>
                        </div>
                        <div>
                            <Link className="text-white px-3" to="/points-table">Points Table</Link>
                        </div>
                    </div>
                    <div className="line pt-10"></div>
                    <div className="socials flex justify-around pt-8 text-white">
                        Social media....
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
