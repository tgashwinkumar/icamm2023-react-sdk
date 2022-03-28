import React from "react";
import Header from "./Header";

const Section5 = () => {
  return (
    <section
      id="section5"
      className="w-screen h-fit px-6 py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-whitesmoke"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header theme="dark" subtext="theme of" text="conference" />
        <div className="flex-1 "></div>
        <div className="text-black lg:max-w-[60%] pt-16 font-poppins text-justify">
          <p className="">
            From January 4th to 6th, 2023, the Department of Mathematics at PSG
            College of Technology in Coimbatore will hold the Fifth
            International Conference on Applied Mathematical Models (ICAMM
            2023). The objective of the conference is to promote research and
            contribute significantly to the development of mathematical and
            computational models. This is accomplished by providing a platform
            for academics, researchers, students, and industry experts to share
            new ideas and discuss current developments in the field. It would
            also serve as a venue for original research articles on the
            theoretical part of mathematics and its applications in engineering
            and technology.
          </p>
          <div className="flex items-start my-6 flex-col lg:flex-row space-y-4 lg:space-y-0">
            <div className="lg:w-1/2">
              <p className="font-bold text-2xl font-ubuntu">venue</p>
              <p className="">
                PSG College of Technology,
                <br />
                Coimbatore, India
              </p>
            </div>
            <div className="lg:w-1/2">
              <p className="font-bold text-2xl font-ubuntu">timings</p>
              <p className="">January 4th to 6th, 2023</p>
            </div>
          </div>
          <p className="">
            The conference will be conducted through hybrid mode (online &
            offline) with invited talks from the experts around the world and
            will focus on the following areas:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
