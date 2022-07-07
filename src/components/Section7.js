import React from "react";
import Header from "./Header";
import ReinNobel from "../assets/Nobel.png";
import Krishnamoorthy from "../assets/krishnamoorthy2.png";
import Dharmaraja from "../assets/dharmar@SFO.png";
import Satyananda from "../assets/satyananda.jpg";
import HugoLeiva from "../assets/Hugo_Leiva_1.jpg";
import SivaguruSritharan from "../assets/RUAS_VC1.jpg";
import Jitendra from "../assets/jitendra-kumar.jpg";
import Radhakrishnan from "../assets/Radhakrishnan-Balu.jpg";
import Swaminathan from "../assets/Swaminathan-Anbhu.jpg";
import Arun from "../assets/Viswanathan-Arunachalam.jpg";
import Vidyotama from "../assets/Vidyottama-Jain.png";

const SpeakersList = [
  {
    name: "Prof. Rein Nobel",
    desc: "Vrije University, Amsterdam, Netherlands",
    image: ReinNobel,
  },
  {
    name: "Prof. A.Krishnamoorthy",
    desc: "Director, Center for Research in Mathematics, CMS College Kottayam, Kerala, India",
    image: Krishnamoorthy,
  },
  {
    name: "Prof. S.Dharmaraja",
    desc: "IIT Delhi, India",
    image: Dharmaraja,
  },
  {
    name: "Prof. Dr.Satyananda Panda",
    desc: "NIT Calicut, India",
    image: Satyananda,
  },
  {
    name: "Prof. Hugo Leiva",
    desc: "Professor, Department of Mathematics, Yachay Tech-University of Andes, Venezuela",
    image: HugoLeiva,
  },
  {
    name: "Dr. Sivaguru S. Sritharan",
    desc: "Chief Technologist, Go. AI Inc., Dayton, Ohio, USA",
    image: SivaguruSritharan,
  },
  {
    name: "Dr. rer. nat. Jitendra Kumar",
    desc: "Professor, Department of Mathematics, Indian Institute of Technology Kharagpur ,Kharagpur - 721302, India",
    image: Jitendra,
  },
  {
    name: "Dr.A. Swaminathan",
    desc: "Professor, Department of Mathematics Associate Dean Academic Affairs (IT Systems and Admissions)Indian Institute of Technology Roorkee Roorkee 247 667, India",
    image: Swaminathan,
  },
  {
    name: "Balu, Radhakrishnan",
    desc: "Adjunct Professor Department of Mathematics University of Maryland,Research scientist, US Army research Lab,Adelphi ,MD",
    image: Radhakrishnan,
  },
  {
    name: "Viswanathan (ARUN) Arunachalam PhD",
    desc: "Statistics,Faculty Member , National University of Colombia",
    image: Arun,
  },
  {
    name: "Vidyottama Jain",
    desc: "Assistant Professor Department of Mathematics Central University of Rajasthan Post-Doctoral Fellow BISC-University of California Berkeley Ph.D.-Indian Institute of Technology Delhi.",
    image: Vidyotama,
  },
];

const Section7 = () => {
  return (
    <section
      id="section7"
      className="w-screen h-fit py-16 px-6 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white"
    >
      <div className="flex flex-col lg:flex-row items-start w-full">
        <Header theme="dark" subtext="this year" text="speakers" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-black w-screen pt-24 md:pt-48 -mt-8 items-start justify-start">
          {SpeakersList.map((speaker, index) => (
            <div className="flex flex-col items-center justify-center lg:justify-start w-screen lg:w-fit space-y-1">
              <div
                className="aspect-square w-56 filter grayscale"
                style={{
                  backgroundImage: `url(${speaker.image})`,
                  backgroundPosition: "50% 20%",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="font-semibold font-poppins">{speaker.name}</p>
              <p className="text-sm text-center font-poppins text-green w-[30ch] lg:w-auto">
                {speaker.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
