import React from "react";
import { Link, useNavigate } from "react-router-dom";
import company from "../img/company.png";
import { TbArrowNarrowDown } from "react-icons/tb";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className=" py-12 px-4 md:px-12 lg:px-8 rounded-t-[2rem] ">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-12 md:mb-20">
        Company's Description
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <img
            src={company}
            alt="Illustration"
            className="rounded-xl mb-6 cursor-pointer"
            onClick={() => {
              navigate("/about");
            }}
          />
        </div>

        {/* Right Column */}
        <div className=" flex flex-col lg:flex-row  justify-center  gap-6 items-center lg:items-start  flex-1">
          <div className="flex-2 lg:-mt-8">
            {" "}
            <h3 className=" text-2xl text-center md:textsta md:text-3xl font-semibold mb-4 text-gray-800">
              Who <span className="text-blue-500">are we</span>?
            </h3>
            <p className="text-gray-600 text-center md:text-start mb-6">
              OiO is a forward-thinking digital agency specializing in custom
              website and web application development. We help businesses,
              institutions, and individuals establish a strong online presence
              through intuitive, scalable, and high-performing digital
              solutions.
            </p>
            <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-4 lg:justify-start mb-6">
              <span className="text-2xl text-blue-600">&#10077;</span>
              <p className="text-sm text-gray-700 font-medium">
                Ready to launch your dream project?
              </p>
            </div>
            <div className="flex items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link
                to="/book"
                className=" px-2 flex justify-center items-center text-center py-2 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"
              >
                Book a Session
              </Link>
              <Link
                to="/portfolio"
                className="px-3  flex justify-center items-center text-center py-2 text-xs border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 cursor-pointer"
              >
                Our Portfolio
              </Link>
            </div>
          </div>

          <div className="flex flex-1 flex-wrap gap-3 mb-6 justify-center items-center lg:-mt-8">
            <div className=" inline-block shadow-blue-600  bg-gray-100 hover:bg-blue-600 text-gary-600  px-6  text-center rounded-full shadow transition text-xs py-2">
              {" "}
              why choose <span className="text-blue-500">us</span>{" "}
            </div>
            <TbArrowNarrowDown/>
            {[
              "Tailor-Made Solutions",
              "User-Centered Design",
              "Full-Service Expertise",
              "Support & Maintenance",
              "Affordable Pricing",
            ].map((text, i) => (
              <div
                key={i}
                className="px-4 py-2 text-center md:text-start border rounded-lg text-xs text-gray-700 hover:bg-blue-50 transition"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
