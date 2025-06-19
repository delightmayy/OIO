import React from "react";
import Header from "../componenet/Header";
import About from "../componenet/About";
import Book from "../componenet/Book";

const AboutPage = () => {
  return (
    <div className="md:px-10 px-4 md:py-4 bg-gray-200/50  bg-[url('/src/img/Background.png')] bg-clip-border bg-cover">
      <div className="max-w-6xl mx-auto ">
        <Header />
        <div className="p-2"></div>
        <About />
        <Book />
      </div>
    </div>
  );
};

export default AboutPage;
