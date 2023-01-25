import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo2 .png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-screen h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 lg:px-20 sm:px-12 z-50">
      <div>
        <img src={Logo} alt="My Initials" />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex ">
        <li className="text-lg hover:scale-110 transition-all duration-200 ease hover:text-[#fff]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-lg hover:scale-110 transition-all duration-200 ease hover:text-[#fff]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-lg hover:scale-110 transition-all duration-200 ease hover:text-[#fff]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-lg hover:scale-110 transition-all duration-200 ease hover:text-[#fff]">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-lg hover:scale-110 transition-all duration-200 ease hover:text-[#fff]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* HamburgerMenu */}
      <div className="md:hidden z-10 " onClick={() => setNav(!nav)}>
        {!nav ? <FaBars fontSize="1.4rem" /> : <FaTimes fontSize="1.4rem" />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 bottom left-0 w-full translate-x-100 h-screen flex flex-col justify-center items-center bg-[#0a192f] animation-pulse"
        }
      >
        <li className="py-6 text-3xl">
          <Link
            to="home"
            onClick={() => setNav(!nav)}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            to="about"
            onClick={() => setNav(!nav)}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            to="skills"
            onClick={() => setNav(!nav)}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            to="projects"
            onClick={() => setNav(!nav)}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            to="contact"
            onClick={() => setNav(!nav)}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <div className="flex justify-center items-center gap-[20px]">
          <li className="p-3 rounded-full  bg-[#0B66C2]">
            <a
              href="https://www.linkedin.com/in/aniket-pithadia/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center font-semibold text-gray-300 w-full"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="p-3 rounded-full  bg-black">
            <a
              href="https://github.com/AniketPithadia"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center font-semibold text-gray-300 w-full"
            >
              <FaGithub size={30} />
            </a>
          </li>

          <li className="p-3 rounded-full  bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1ooa6p1RnGpZZglgfybP8N0hcsbrrrO1g/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center text-gray-300 font-semibold w-full"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </div>
      </ul>

      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0B66C2]">
            <a
              href="https://www.linkedin.com/in/aniket-pithadia/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center font-semibold text-gray-300 w-full"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              href="https://github.com/AniketPithadia"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center font-semibold text-gray-300 w-full"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1ooa6p1RnGpZZglgfybP8N0hcsbrrrO1g/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center text-gray-300 font-semibold w-full"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
