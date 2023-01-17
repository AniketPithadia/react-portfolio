import React, { useEffect } from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 px-2">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              className="text-4xl font-bold inline border-b-4 border-pink-600 ml-2"
              data-aos="fade-in"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-5 sm:grid  grid-cols-2 gap-8 ">
          <div
            className="text-3xl sm:text-right md:text-4xl font-bold "
            data-aos="fade-right"
          >
            <p>
              Hello. I am Aniket, Nice to see you here. Please take a look around.
            </p>
          </div>
          <div className="mt-5 md:mt-1 " data-aos="fade-left">
            <p className="break-word">
              I am passionate about building excellent web applications that improves
              the lives of those around me.I specialize in creating dynamic and static websites using in-demand technologies.
              Always enthusiatic to adapt to new tech stacks and learn actively from everyone around me and provide value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
