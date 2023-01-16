import React from "react";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen p-4 bg-[#0a192f] flex flex-col justify-center items-center py-20 h-full"
      >
        <form
          method="POST"
          action="https://getform.io/f/848065f3-3c3c-4c97-a48b-269e70e40a2b"
          className="flex flex-col max-w-[600px] w-full my-11"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              // Submit the form below or shoot me an email -
              <span className="text-lg" style={{ color: "#e66a91" }}>
                aniketpithadia@gmail.com
              </span>
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] text-lg p-4 rounded-3xl font-bold placeholder:text-gray-500 placeholder:font-medium outline-none"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-4 bg-[#ccd6f6]  text-lg rounded-3xl font-bold placeholder:text-gray-500 placeholder:font-medium outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-4  text-lg rounded-3xl font-bold placeholder:text-gray-500 placeholder:font-medium outline-none"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white text-lg rounded-md border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>

        {/* Socials */}
        <div className="lg:hidden sm:flex justify-center items-center ">
          <ul className="flex justify-between items-center">
            <li className="bg-[#0B66C2] rounded-full flex justify-center items-center p-4 mx-2 mb-3  mx-2">
              <a
                href="https://www.linkedin.com/in/aniket-pithadia/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 "
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="bg-black rounded-full flex justify-center items-center p-4 mx-2 mb-3 ">
              <a
                href="https://github.com/AniketPithadia"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 "
              >
                <FaGithub size={30} />{" "}
              </a>
            </li>

            <li className="bg-[#565f69] rounded-full flex justify-center items-center p-4 mx-2 mb-3 ">
              <a
                href="https://drive.google.com/file/d/1ooa6p1RnGpZZglgfybP8N0hcsbrrrO1g/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className=" text-gray-300 "
              >
                <BsFillPersonLinesFill className="" size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-2xl text-[#fff] text-center italic flex py-4 ">
          Made with 💓 Aniket Pithadia
        </div>
      </div>
    </>
  );
};

export default Contact;
