import React from "react";
import Header from "../componenet/Header";
import Hero from "../componenet/Hero";
import Service from "../componenet/Service";
import Trusty from "../componenet/Trusty";
import Projects from "../componenet/Projects";
import Testimonial from "../componenet/Testimonial";
import Book from "../componenet/Book";
import About from "../componenet/About";

const Home = () => {
  return (
    <div className="md:px-10 px-4 md:py-4 bg-gray-100/70">
      <div className="max-w-6xl mx-auto">
        <Header />
        <Hero />
        <Trusty />
        <About /> 
        <Service />
        <Projects />
        <Testimonial />
        <Book />
      </div>
    </div>
  );
};

export default Home;
