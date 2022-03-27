import Header from "./Header";
const Section8 = () => {
  return (
    <section className="w-screen h-fit px-6 py-16 lg:px-[calc(100vw/12)] space-y-4 lg:flex lg:flex-col bg-green">
      <div className=" lg:flex-row items-start">
        <Header theme="light" subtext="" text="registration" />
        <div className="flex-1 "></div>
        <div className="text-white lg:max-w-[60%] pt-16 font-poppins text-justify">
          <p className="">
            It is mandatory that atleast one author of each accepted paper
            register and present the paper in the technical sessions. All
            accepted papers will be considered for presentation and publication
            only after the payment of registration fee.
          </p>
        </div>
        <div className="grid grid-rows-5 bg-white w-full h-fit mt-20 border-solid border-slate border-x-1">
          <div className="bg-dark-green font-ubuntu flex items-center justify-center py-2 border-solid border-slate border text-white border-t-2">
            Indian Delegates
          </div>
          <div className="bg-whitesmoke py-2 border-solid border-slate border font-poppins flex">
            <p className="text-left mx-5">Academicians</p>
            <p className=" bg-light-green relative right-2 rounded-lg px-5 py-0.5">
              ₹ 2500
            </p>
          </div>
          <div className="bg-whitesmoke py-2 border-solid border-slate border font-poppins flex">
            <p className="text-left mx-5">
              Industry / R&D Institutuion Participants
            </p>
            <p className=" bg-light-green relative right-2 rounded-lg px-5 py-0.5">
              ₹ 1500
            </p>
          </div>
          <div className="bg-whitesmoke py-2 border-solid border-slate border font-poppins flex">
            <p className="text-left mx-5">Full Time Research Scholars</p>
            <p className=" bg-light-green relative right-2 rounded-lg px-5 py-0.5">
              ₹ 1000
            </p>
          </div>
          <div className="bg-whitesmoke py-2 border-solid border-slate border-b-2 border font-poppins flex">
            <p className="text-left mx-5">Accompanying guests / Spouse</p>
            <p className="bg-light-green relative right-2 rounded-lg px-5 py-0.5">
              ₹ 1000
            </p>
          </div>
        </div>

        <div className="grid grid-rows-3 bg-white w-full h-fit mt-20">
          <div className="bg-dark-green font-ubuntu flex items-center justify-center py-2 border-solid border-slate border text-white border-t-2">
            Foreign Delegates
          </div>
          <div className="bg-whitesmoke py-2 border-solid border-slate border font-poppins flex">
            <p className="text-left mx-5">Academicians</p>
            <p className="bg-light-green relative right-2 rounded-lg px-5 py-0.5">
              200 USD
            </p>
          </div>
          <div className="bg-whitesmoke py-2 border-solid border-slate border-b-2 border font-poppins flex">
            <p className="text-left mx-5">Accompanying guests / Spouse</p>
            <p className="bg-light-green relative right-2 rounded-lg px-5 py-0.5">
              100 USD
            </p>
          </div>
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
export default Section8;
