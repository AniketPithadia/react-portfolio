import React, { useEffect } from "react";
import animegram from "../assets/animegram.png";
import fitnessapp from "../assets/fitnessapp.png";
import youtube from "../assets/youtube.png";

const Work = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-[#0a192f] pt-20 px-2"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md:pt-10 py-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <div
            style={{ backgroundImage: `url(${animegram})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div cursor-pointer"
            data-aos="fade-down-left"
            data-aos-duration="1500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-center flex justify-center font-bold text-white tracking-wider">
                Animegram
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://animegram-jade.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/AniketPithadia/Animegram"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 2 */}
          <div
            style={{ backgroundImage: `url(${youtube})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div cursor-pointer"
            data-aos="fade-down-left"
            data-aos-duration="1700"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-center flex justify-center font-bold text-white tracking-wider">
                Youtube Clone
              </span>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://youtube-clone-nine-rose.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a
                  href="https://github.com/AniketPithadia/YOUTUBE2.0"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 3 */}
          <div
            style={{ backgroundImage: `url(${fitnessapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div cursor-pointer"
            data-aos="fade-down-left"
            data-aos-duration="1900"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl text-center flex justify-center font-bold text-white tracking-wider">
                Fitness App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://gym-app-eight.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/AniketPithadia/Gym-app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
