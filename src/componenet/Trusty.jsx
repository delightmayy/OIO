import React from "react";
import trusty1 from "../img/exp1.png";
import trusty2 from "../img/exp2.png";
import trusty3 from "../img/exp3.png";
import trusty4 from "../img/exp4.png";
import trusty5 from "../img/exp5.png";
import trusty6 from "../img/exp6.png";
import quote1 from "../img/quote2.png";

const Trusty = () => {
  return (
    <div className="flex flex-col pt-1 p-4 pb-0 gap-4  px-4  max-w-7xl mx-auto my-8">
      <div className="w-1/4  bg-gray-200 py-8 rounded-t-2xl p-1 px-3 translate-y-9 ">
        <div className="flex justify-start items-center gap-3">
          <img src={quote1} alt="" className="w-4" />
          <span className="text-xs">Tested & Trusted</span>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-4 gap-x-7 p-3  overflow-x-scroll md:overflow-x-hidden text-center text-nowrap bg-gray-200 py-8 rounded-b-2xl ">
        <div className="">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-700 ">
            8y+
          </h3>
          <p className="text-xs text-blue-500">Experience </p>
        </div>
        <div className="">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-700 ">
            250+
          </h3>
          <p className="text-xs  text-blue-500">Merchant Partner </p>
        </div>
        <div className="">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-700 ">
            450+
          </h3>
          <p className="text-xs text-blue-500">Project Completed </p>
        </div>
        <div className="">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-700 ">
            10.2k+
          </h3>
          <p className="text-xs text-blue-500">Worldwide Clients</p>
        </div>
      </div>

      <div className="flex justify-evenly items-center gap-4 gap-x-7 p-3 py-2 overflow-x-scroll md:overflow-x-hidden ">
        <img src={trusty1} alt="" className=" w-20 md:w-40 lg:w-60 xl:w-70" />
        <img src={trusty3} alt="" className=" w-20 md:w-40 lg:w-60 xl:w-70" />
        <img src={trusty2} alt="" className=" w-20 md:w-40 lg:w-60 xl:w-70" />
        <img src={trusty4} alt="" className=" w-6 md:w-12 lg:w-16 xl:w-18 " />
        <img src={trusty5} alt="" className=" w-20 md:w-20 lg:w-60 xl:w-70" />
        <img src={trusty6} alt="" className=" w-20 md:w-20 lg:w-60 xl:w-70" />
      </div>
    </div>
  );
};

export default Trusty;
