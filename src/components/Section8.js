import React from "react";
import Header from "./Header";
import { FiMail } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";

const Section8 = () => {
  return (
    <div>
      <section
        id="section8"
        className="w-screen h-fit px-6 py-24 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-whitesmoke"
      >
        <div className="flex flex-col lg:flex-row items-start">
          <Header theme="dark" subtext="call for" text="papers" />
          <div className="flex-1 "></div>
          <div className="text-black lg:max-w-[60%] pt-16 font-poppins text-justify">
            <p>
              Authors are encouraged to submit an electronic version of their
              original research papers in the prescribed format available in the
              ICAMM 2023 website. Please ensure that the content submitted has
              not been part of any other conference proceedings or journal
              papers. All papers would be subject to rigorous review. All
              accepted papers, after the receipt of author registration will
              appear in full-length in the conference proceedings (CD format
              only).
            </p>
            <div className="mt-12">
              For all communications and paper submissions use the e-mail
              address :-
            </div>
            <div className="text-xl font-ubuntu flex space-x-2 items-center mt-2 px-4">
              <FiMail size={24} />
              <p className="">icamm2023@psgtech.ac.in</p>
            </div>
            <button className="text-xl font-ubuntu flex space-x-2 items-center mt-8 bg-dark-green text-white px-4 py-2 rounded-lg shadow-lg w-fit hover:scale-[99%] transition-all ease-in-out">
              <FiFileText size={24} />
              <a
                href="https://drive.google.com/file/d/1A5VMjIReOJII-XctR6UVAGESS9v_q2oi/view?usp=sharing"
                className=""
              >
                Author Guidelines and Templates
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="w-screen h-fit px-6  pb-24 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white">
        <div className="flex flex-col lg:flex-row items-start pt-32">
          <Header theme="dark" subtext="journal" text="publication" />
          <div className="flex-1 "></div>
          <div className="text-black lg:max-w-[60%] pt-16 font-poppins text-justify">
            <p>
              High calibre papers selected through a peer review process, will
              be taken into consideration for publication in one of the journals
              listed below that are indexed in Web of Science/UGC CARE list with
              a nominal publication fee.
            </p>

            <div className="font-ubuntu text-lg text-dark-green flex space-x-2 items-center mt-2 px-4">
              <ul className="pt-4 space-y-4">
                <li>
                  1. Advances and Applications in Mathematical Sciences, Mili
                  Publications, ISSN: 0974-6803
                </li>
                <li>
                  2. Communications Faculty of Sciences University of Ankara
                  Series A1: Mathematics and Statistics, Faculty of Science,
                  Ankara University, ISSN: 1303-5991
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section8;
