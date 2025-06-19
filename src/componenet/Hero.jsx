import React from "react";
import heroimg from "../img/Heroimg.png";
import quote1 from "../img/quote1.png";
import quote2 from "../img/quote2.png";
const Hero = () => {
  return (
    <div className="flex flex-col gap-4 bg-[url('/src/img/Background.png')] bg-clip-border bg-cover ">
      <div className="flex flex-col justify-center items-center mt-4 md:mt-10 gap-3 ">
        <div className=" text-xs  border rounded-full px-3 py-0.5">
          Build Smarter. Launch Faster
        </div>
        <div className="text-center text-xl md:text-3xl lg:text-4xl font-bold ">
          <p className="">Turn Your Vision Into a </p>
          <p className="">
            <span className="text-blue-500">Digital</span> Reality
          </p>
        </div>
      </div>

      <div className="flex  flex-col md:flex-row md:justify-between justify-center items-center gap-6 md:gap-10 ">
        <div className="  md:hidden  -mt-10">
          <img src={heroimg} alt="hero image" className=" w-60" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center md:justify-start ">
          {/* <span className="md:w-30  border-gray-700 border-t border-b border-rounded rounded-bl-2xl p-1 ">
           
          </span> */}
          <p className=" flex items-center md:gap-2 mb-4  w-40 -ms-18">
            <img src={quote2} alt="" className=" w-8 h-8 md:w-10 md:h-10" />
            <span className=" rounded-full p-1 px-2 mx-auto md:mx-0 border-gray-700 border   border-rounded border-r-indigo-50 border-l-indigo-50 ">
              About us
            </span>
          </p>

          <p className="md:w-60  max-w-md mt-3 text-center md:text-start ">
            OiO - a modern web agency helping startups, brands, and
            organizations create powerful online experiences
          </p>
          <p className="text-blue-500 md:w-60  max-w-md  text-center md:text-start ">
            {" "}
            — from business websites to e-commerce and custom apps.
          </p>
        </div>

        <div className=" hidden md:flex  sm:-mt-14">
          <img src={heroimg} alt="hero image" className=" md:w-80" />
        </div>

        <div className="flex-1 flex flex-col  justify-center md:items-center ">
          <p className=" flex items-center gap-2 mb-4  w-40 ms-18">
            <span className="border-gray-700 border border-rounded border-r-indigo-50 rounded-full border-l-indigo-50  p-1  mx-auto md:mx-0">
              Our Services
            </span>
            <img src={quote1} alt="" className=" w-8 h-8 md:w-10 md:h-10" />
          </p>
          <p className=" md:w-60 max-w-md border p-1 px-2  border-blue-500 border-r-0">
            Business Website Development
          </p>
          <p className=" md:w-60 max-w-md border p-1 px-2  border-blue-500 border-l-0 border-t-0">
            Custom Web Applications
          </p>
          <p className=" md:w-60 max-w-md border p-1 px-2  border-blue-500 border-r-0 border-t-0">
            Mobile App Development
          </p>
          <p className=" md:w-60 max-w-md border p-1 px-2  border-blue-500 border-l-0 border-t-0">
            E-Commerce Platforms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
