import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
const Home = () => {
  return (
    <div className="container  flex items-center flex-col justify-center max-w-full mx-auto h-[700px]  ">
      <p className="text-3xl text-indigo-500 container text-center ">
        {" "}
        Online Resume Maker Build a Professional Resume in Minutes
      </p>{" "}
      <br />
      <p className="conatiner animate__animated animate__fadeInBottomLeft">
        Creating a resume is a daunting task. Nothing but stress, confusion, and{" "}
        <br />
        wasting precious hours on making a good-looking template. But not with{" "}
        <br />
        Resume builder 2.0. Its fast easy efficient & free
      </p>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mt-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative flex flex-row items-center justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <FaTelegramPlane className="w-6 h-6 text-indigo-500 " /> Make your
          resume Now
        </span>
      </button>
    </div>
  );
};

export default Home;
