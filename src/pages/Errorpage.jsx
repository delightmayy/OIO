import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";


const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 8000);
  }, []);

  return (
    <div>
      
      <div className="flex flex-col items-center justify-center  gap-6  pt-1 p-4  max-w-7xl mx-auto  bg-[url('/src/img/bgb.png')] bg-clip-border bg-conver h-screen ">
        <main className="  grid   py-4 sm:py-20 lg:px-8">
          {" "}
          {/* //BLUR1// */}
          <div className="absolute blur-[100px] p-13 top-20   md:p-18  md:top-65 md:blur-[90px] left-[50%] lg:p-30 lg:top-40  bg-[#75feec5f] lg:blur-[120px]"></div>
          <div className="absolute   blur-[100px] p-20 bottom-10   md:blur-[100px]  md:-bottom-6 right-[45%] lg:p-20  bg-[#75FEEC78] lg:-bottom-10 lg:blur-[110px]"></div>
          <div className="text-center mt-5">
            <p className="text-base font-semibold dark:text-gray-700">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-gray-700 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-700 py-6">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className=" flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md bg-white/50 px-3.5 py-2.5 text-sm font-semibold dark:text-gray-700 shadow-sm hover:bg-piink-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                Go back home
              </Link>
              <Link to="/" className="text-sm font-semibold text-gray-700/50">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
     
    </div>
  );
};

export default ErrorPage;
