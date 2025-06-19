import React from "react";
import Header from "../componenet/Header";
import Formfield from "../componenet/formfield";


const Form = () => {
  return (
    <div className="md:px-10 px-4 md:py-4 bg-gray-200/50   bg-[url('/src/img/bgb.png')] bg-clip-border bg-center ">
      <div className="max-w-6xl mx-auto ">
        <Header />
        <div className=" p-2 md:p-8"></div>
        <Formfield/>
      </div>
    </div>
  );
};

export default Form;
