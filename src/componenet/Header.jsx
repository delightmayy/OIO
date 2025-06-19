import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/OiO.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-center w-full scale-55  xs:scale-65 sm-scale-80 md:scale-100 text-sm  max-h-10">
      <div className="bg-gray-300 rounded-full flex items-center justify-between p-0.5 px-2 gap-2 w-full ">
        <Link to={"/"} className="  py-2 sm:px-6 cursor-pointer hover:bg-blue-500 rounded-3xl ">
          Home
        </Link>
        <Link 
        to={"/about"} className=" px-4 py-2 sm:px-6 cursor-pointer hover:bg-blue-500 rounded-3xl ">
          About
        </Link>
        <Link to={"/contact"} className=" px-4 py-2 sm:px-6 cursor-pointer  hover:bg-blue-500 rounded-3xl ">
          Contact
        </Link>
      </div>
      <div className="z-1 flex p-4 sm:px-10 ">
        <Link to="/" className="w-14">
          <img src={logo} alt="our logo" />
        </Link>
      </div>
      <div className="bg-gray-300 rounded-full flex items-center justify-between p-1 px-2 gap-2  w-full">
        <Link className=" px-4 py-2 sm:px-6 cursor-pointer hover:bg-blue-500 rounded-3xl ">
          Home
        </Link>
        <Link className=" px-4 py-2 sm:px-6 cursor-pointer hover:bg-blue-500 rounded-3xl ">
          Home
        </Link>
        <Link className=" px-4 py-2 sm:px-6 cursor-pointer hover:bg-blue-500 rounded-3xl ">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
