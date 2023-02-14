import React from "react";
import { VscGithub } from "react-icons/vsc";

const navbar = () => {
  return (
    <div className="container flex flex-row items-center justify-center shadow-2xl animate__animated animate__fadeInDown p-5 ">
      <VscGithub className="mr-4 h-10 w-10" />
      <h1 className="text-lg text-indigo-600 ">Resume Builder 2.0</h1>
    </div>
  );
};

export default navbar;
