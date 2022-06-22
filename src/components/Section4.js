import React from "react";
import HODimg from "../assets/HOD_img.jpg";
import Header from "./Header";

const Section4 = () => {
  return (
    <section
      id="section3"
      className="w-screen h-fit px-6 py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header subtext="about the" text="department" />
        <div className="flex-1 "></div>
        <div className="text-black lg:max-w-[60%] pt-16 font-poppins text-justify">
          Since 1951, Department of Mathematics at PSG College of Technology
          continues to impart mathematical skill and analytical thinking to all
          students in the institution. Over the past 7 decades with the highest
          standards in both research and teaching, it has seen a phenomenal
          growth and success. The department has strongly motivated faculty with
          diverse specialization in Mathematics which provides basics for
          pursuing research in basic sciences and also in interdisciplinary
          areas. The department organizes extension programmes like conferences,
          workshops, seminars and symposiums on various topics. The department
          provides students a solid base in Applied Mathematics to make them
          dedicated engineers and scientists. Every year a good contribution of
          research articles in Scopus and SCI indexed journals to the credit of
          the department. Many funded research projects sponsored by UGC, CSIR
          and DST have been completed.
        </div>
      </div>
    </section>
  );
};

export default Section4;
