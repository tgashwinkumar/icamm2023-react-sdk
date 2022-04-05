import React from "react";
import Header from "./Header";
import ReinNobel from "../assets/rein_nobel.jpg";
import Krishnamoorthy from "../assets/krishnamoorthy.jpg";
import Dharmaraja from "../assets/dharmaraja.jpg";
import Satyananda from "../assets/satyananda.jpg";

const SpeakersList = [
  {
    name: "Prof. Rein Nobel",
    desc: "Vrije University, Amsterdam, Netherlands",
    image: `${ReinNobel}`,
  },
  {
    name: "Prof. A.Krishnamoorthy",
    desc: "Director, Center for Research in Mathematics, CMS College Kottayam, Kerala, India",
    image: `${Krishnamoorthy}`,
  },
  {
    name: "Prof. S.Dharmaraja",
    desc: "IIT Delhi, India",
    image: `${Dharmaraja}`,
  },
  {
    name: "Prof. Dr.Satyananda Panda",
    desc: "NIT Calicut, India",
    image: `${Satyananda}`,
  },
  {
    name: "Prof. Rein Nobel",
    desc: "Vrije University, Amsterdam, Netherlands",
    image: `${ReinNobel}`,
  },
  {
    name: "Prof. A.Krishnamoorthy",
    desc: "Director, Center for Research in Mathematics, CMS College Kottayam, Kerala, India",
    image: `${Krishnamoorthy}`,
  },
  {
    name: "Prof. S.Dharmaraja",
    desc: "IIT Delhi, India",
    image: `${Dharmaraja}`,
  },
  {
    name: "Prof. Dr.Satyananda Panda",
    desc: "NIT Calicut, India",
    image: `${Satyananda}`,
  },
];

const Section7 = () => {
  return (
    <section
      id="section7"
      className="w-screen h-fit py-16 px-6 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-white"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header theme="dark" subtext="this year" text="speakers" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black w-screen pt-24 md:pt-48 items-start justify-start">
          {SpeakersList.map((speaker, index) => (
            <div className="flex flex-col items-center justify-start w-fit space-y-1">
              <div
                className="aspect-square w-56 filter grayscale"
                style={{
                  backgroundImage: `url(${speaker.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="font-semibold font-poppins">{speaker.name}</p>
              <p className="text-sm text-center font-poppins text-green">
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
