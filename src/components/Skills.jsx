import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import mongoDB from "../assets/mongo.png";
import nodejs from "../assets/node.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full text-gray-300 pt-20 px-2">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Skills
          </p>
          <p className="py-4">
            {"// These are technologies and tools that I've worked with"}
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} className="w-20 mx-auto" alt={html} />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} className="w-20 mx-auto" alt={css} />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={javascript} className="w-20 mx-auto" alt={javascript} />
            <p className="my-4">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} className="w-20 mx-auto" alt={react} />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={nodejs} className="w-20 mx-auto" alt={nodejs} />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={mongoDB} className="w-20 mx-auto" alt="MongoDB" />
            <p className="my-4">MongoDB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={firebase} className="w-20 mx-auto" alt={firebase} />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={github} className="w-20 mx-auto" alt={github} />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
