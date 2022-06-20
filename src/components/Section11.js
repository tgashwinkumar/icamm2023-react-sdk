import Header from "./Header";
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Map from "./Map";
import psgtech from "../assets/psg-tech.png";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Section11 = () => {
  return (
    <section
      id="section9"
      className="w-screen h-fit space-y-4 flex flex-col lg:flex-row bg-white"
    >
      <a
        href="https://www.google.com/maps?q=psg+college+of+technology&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiqz_ba_rv4AhXC3jgGHeboCLYQ_AUoBHoECAIQBg" 
        className="min-h-[60vh] h-full w-full lg:w-1/2 text-slate m-6 rounded-lg"
        style={{
          backgroundImage: `url(${psgtech})`,
          backgroundPosition: "center",
          backgroundSize: "fit",
        }}
      ></a>
      <div className="w-full lg:w-1/2 flex flex-col  items-start px-6 py-16 lg:px-[calc(100vw/12)]">
        <Header theme="dark" subtext="for" text="contact" />
        <div className="mt-6 space-y-4">
          <h1 className="font-bold text-2xl font-ubuntu">Dr. T. Vasanthi</h1>
          <p className="text-dark-green">
            Organizing Secretary – ICAMM 2023 <br /> Department of Mathematics,{" "}
            <br />
            PSG College of Technology, Coimbatore- 641004.{" "}
          </p>
          <p className="mt-1 text-dark-green  flex items-center space-x-2 ">
            <BsFillTelephoneFill size={24} />
            <p className=""> 91-422-2572177, Extn: 4661, 4443 </p>
          </p>
          <p className="mt-1 text-dark-green flex items-center space-x-2 ">
            <BsTelephone size={24} />
            <p className="">9994156476 </p>
          </p>
          <p className="mt-1 text-dark-green  flex items-center space-x-2 ">
            <MdOutlineEmail size={24} />
            <p className="">Email: icamm2023@psgtech.ac.in</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section11;
