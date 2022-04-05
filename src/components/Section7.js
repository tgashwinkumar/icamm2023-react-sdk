import React from "react";
import Header from "./Header";
import ReinNobel from "../assets/rein_nobel.jpg";
import Krishnamoorthy from "../assets/krishnamoorthy.jpg";
import Dharmaraja from "../assets/dharmaraja.jpg";
import Satyananda from "../assets/satyananda.jpg";
const Speaker = ({
  name = "name",
  image = "image",
  desc = "desc",
  className = "",
}) => {
  return (
    <div
      className={`bg-green w-3/4 md:w-5/6 lg:w-2/3 h-[22rem]  flex flex-col items-start rounded-md p-2 ${className}`}
    >
      <img
        src={`${image}`}
        className="grayscale w-full h-2/3 rounded-t-md"
      ></img>
      <div className="flex flex-col justify-center items-center w-full font-ubuntu font-semibold pt-2">
        {name}
      </div>
      <div className="flex flex-col justify-center items-center text-center w-full font-poppins pt-2 text-sm">
        {desc}
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <section
      id="section7"
      className="w-screen h-fit py-16 px-6 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header theme="dark" subtext="plenary" text="speakers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black w-screen pt-24 md:pt-48 items-center justify-center">
          <Speaker
            name="Prof. Rein Nobel"
            desc="Vrije University, Amsterdam, Netherlands"
            image={`${ReinNobel}`}
          />
          <Speaker
            name="Prof. A.Krishnamoorthy"
            desc="Director, Center for Research in Mathematics, CMS College Kottayam, Kerala, India"
            image={`${Krishnamoorthy}`}
          />
          <Speaker
            name="Prof. S.Dharmaraja"
            desc="IIT Delhi, India"
            image={`${Dharmaraja}`}
          />
          <Speaker
            name="Prof. Dr.Satyananda Panda"
            desc="NIT Calicut, India"
            image={`${Satyananda}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Section7;
