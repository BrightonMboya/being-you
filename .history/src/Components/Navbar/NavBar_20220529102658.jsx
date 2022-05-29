import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'
import { FaBars, FaTimes, FaInstagram, FaYoutube } from 'react-icons/fa'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <React.Fragment>
      <div className="flex items-center justify-between shadow-md">
        <div className="md:hidden">
          <img src={logo} alt="" className="object-cover w-28 h-28" />
        </div>

        {/* menu */}
        <ul className="hidden md:flex gap-[4vh] ml-[6vh] mt-4">
          <li className="mt-5">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mt-5">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="mt-5">
            <Link to="listen" smooth={true} duration={500}>
              Listen
            </Link>
          </li>
          <li className="mt-5">
            <Link to="read" smooth={true} duration={500}>
              Read
            </Link>
          </li>
          <li>
            <img src={logo} alt="" className="object-cover w-30 h-20" />
          </li>
          <li className="mt-5">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className="mt-5">
            <FaInstagram className="w-full" />
          </li>
          <li className="mt-5">
            <FaYoutube />
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {!nav ? (
            <FaBars className="text-2xl w-full mr-8" />
          ) : (
            <FaTimes className="text-3xl  mr-3" />
          )}
        </div>

        {/* mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-[60vh] flex flex-col justify-center items-center'
          }
        >
          <li className="text-2xl py-5">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="listen" smooth={true} duration={500}>
              Listen
            </Link>
          </li>
          <li className="text-2xl">
            <Link to="read" smooth={true} duration={500}>
              Read
            </Link>
          </li>

          <li className="text-2xl">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default NavBar
