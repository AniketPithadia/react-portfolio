import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      name="home"
      className="w-full h-full pt-32  md:pt-0 md:pb-0  bg-[#0a192f] "
    >
      <div
        className="max-w-[1000px] mx-auto pt-80 px-8 lg:px-20 flex flex-col  justify-center h-full "
        data-aos="fade-down"
      >
        <p className=" text-pink-600 sm:text-2xl sm:ml-3 ">Hi, I am </p>
        <h1 className="text-4xl md:text-7xl mt-3 font-bold text-[#fff]">
          Aniket Pithadia
        </h1>
        <h2 className="text-3xl md:text-6xl mt-3 font-bold text-[#cc92b0]">
          Front End Developer
        </h2>
        <p className="text-[#8892b0] sm:text-xl py-4 max-w-[750px]">
          I am a developer specializing in building exceptional User Interfaces
          with frontend technologies like React Js. I am currently focused on
          building responsive web applications.
        </p>
        <div>
          <button className="group text-white border-2 rounded-md px-6 py-3 my-2  flex items-center hover:bg-pink-600 hover:border-pink-600 duration-100 ">
            <Link to="projects" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
