import React from "react";
import Header from "./Header";

const Section3 = () => {
  return (
    <section className="w-screen h-fit px-6 py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-green">
      <div className="flex flex-col lg:flex-row items-start">
        <Header theme="light" subtext="about the" text="institution" />
        <div className="flex-1 "></div>
        <div className="text-white lg:max-w-[60%] pt-16 font-poppins text-justify">
          PSG College of Technology an ISO 9001:2015 certified institution is
          one of the foremost institutions founded by the PSG and sons’
          Charities trust (1926). The college was established in the year 1951
          and the founders wisely decided to locate it in the same campus as the
          PSG Industrial Institute for effective industry institute interaction.
          The founder Principal Dr.G.R.Damodaran was instrumental in the planned
          growth of the institution from the humble beginnings in 1951 to the
          present status of a world-renowned technological institution. The
          college today has student strength of about 8518 with 15 Engineering
          and Technology departments. More than 600 research scholars are
          pursuing research programmes leading to Ph.D/MS/MTech degrees and the
          college is a recognized QIP center for Postgraduate and Ph.D
          programmes. Several advanced centers are set up with financial support
          from MHRD, DST and other agencies. The programmes of the college are
          recognized all over India and abroad.
        </div>
      </div>
    </section>
  );
};

export default Section3;
