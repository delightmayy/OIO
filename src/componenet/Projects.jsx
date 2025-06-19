import porf1 from "../img/porf1.png";
import porf2 from "../img/porf2.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-200 pb-10 md:pb-20  my-4 py-4 px-4 md:px-10 lg:px-20 rounded-t-3xl text-gray-600 rounded-3xl">
      <p className="text-xl text-center md:text-3xl font-bold text-gray-700 mt-12 mb-4">
        Our Projects
      </p>
      <div className="text-center flex md:flex-row flex-col  justify-between items-center mb-12 max-w-5xl px-12">
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Have a look at our <span className="text-blue-500">Portfolio</span>
        </h2>
        <Link
          to="/portfolio"
          className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition"
        >
          View Portfolio
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-10 md:space-y-0 items-center justify-center">
        {/* Project 1 */}

        <Link to="/portfolio" className="max-w-md px-3 cursor-pointer">
          <img src={porf1} alt="" className="" />
        </Link>

        {/* Project 2 */}
        <Link to="/portfolio" className="max-w-md px-3 cursor-pointer">
          <img src={porf2} alt="" className="" />
        </Link>
      </div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-12">
        {[
          "Landing Page",
          "Web Development",
          "Mobile Apps",
          "Telegram Mini Apps",
          "Web Applications",
        ].map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition hover:bg-blue-500 hover:text-white hover:cursor-pointer border-gray-500 text-gray-700`}
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default Projects;
