import Header from "./Header";

const Section10 = () => {
  return (
    <section
      id="section9"
      className="w-screen h-fit px-6 py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-whitesmoke"
    >
      <div className="flex flex-col lg:flex-row items-start">
        <Header  subtext="organizing" text="commitee" />
        <div className="flex-1 "></div>
        <div className="text-white lg:max-w-[60%] pt-16 font-poppins text-justify">
          <p className="">
            It is mandatory that atleast one author of each accepted paper
            register and present the paper in the technical sessions. All
            accepted papers will be considered for presentation and publication
            only after the payment of registration fee.
          </p>
        </div>
      </div>
      <div className=" items-start my-6 pt-8 lg:space-y-0">
        <p className="text-white text-2xl font-ubuntu font-semibold">
          Accomodation & Visa
        </p>
        <p className="text-white font-poppins pt-6">
          Limited accommodation for registered delegates is available at the
          guest house / student hostels of the college, on a chargable basis
          subject to availability. Requests for the same must in advance. All
          overseas citizens travelling to India require a visa. A general portal
          with information about consulates and visa services for India is at
          <a href="https://www.visatoindia.com" className="">
            &nbsp; https://www.visatoindia.com
          </a>
        </p>
      </div>
    </section>
  );
};
export default Section10;
