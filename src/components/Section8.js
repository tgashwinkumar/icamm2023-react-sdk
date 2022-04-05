import React from "react";
import Header from "./Header";
import { FiMail } from "react-icons/fi";
const Section8 = () => {
  return (
    <section
      id="section7"
      className="w-screen h-fit px-6 py-24 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header theme="dark" subtext="call for" text="papers" />
        <div className="flex-1 "></div>
        <div className="text-black lg:max-w-[60%] pt-16 font-poppins text-justify">
          <p>
            Authors are encouraged to submit an electronic version of their
            original research papers in the prescribed format available in the
            ICAMM 2023 website. Please ensure that the content submitted has not
            been part of any other conference proceedings or journal papers. All
            papers would be subject to rigorous review. All accepted papers,
            after the receipt of author registration will appear in full-length
            in the conference proceedings (CD format only).
          </p>
          <div className="mt-12">
            For all communications and paper submissions use the e-mail address
            :-
          </div>
          <div className="text-xl font-ubuntu flex space-x-2 items-center mt-2">
            <FiMail size={24} />
            <p className="">icamm2023@psgtech.ac.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
