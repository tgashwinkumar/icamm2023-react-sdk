import React from "react";
import HODimg from "../assets/HOD_img.jpg";
import Header from "./Header";

const Section4 = () => {
  return (
    <section className="w-screen h-fit lg:flex lg:flex-col bg-white">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div
          className="w-full lg:w-1/3 min-h-[24rem] bg-black grayscale relative"
          style={{
            backgroundImage: `url(${HODimg})`,
            backgroundPosition: "30% 50%",
            backgroundSize: "cover",
          }}
        >
            <div className="absolute bottom-10 right-0 hidden lg:block bg-gradient-to-r from-transparent to-white w-fit px-6 text-right py-2">
                <p className="font-bold text-lg">HOD</p>
                <p className="text-lg">Dr. Porkodi C</p>
            </div>
        </div>
        <div className="w-full lg:w-2/3 h-full px-6 py-6 lg:py-24 lg:px-[calc(100vw/12)]">
          <Header subtext="about the" text="department" />
          <div className="text-black w-full pt-16 font-poppins text-justify">
            Since 1951, Department of Mathematics at PSG College of Technology
            continues to impart mathematical skill and analytical thinking to
            all students in the institution. Over the past 7 decades with the
            highest standards in both research and teaching, it has seen a
            phenomenal growth and success. The department has strongly motivated
            faculty with diverse specialization in Mathematics which provides
            basics for pursuing research in basic sciences and also in
            interdisciplinary areas. The department organizes extension
            programmes like conferences, workshops, seminars and symposiums on
            various topics. The department provides students a solid base in
            Applied Mathematics to make them dedicated engineers and scientists.
            Every year a good contribution of research articles in Scopus and
            SCI indexed journals to the credit of the department. Many funded
            research projects sponsored by UGC, CSIR and DST.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
