import React from "react";

const Section6 = () => {
  return (
    <section className="flex justify-end px-6 lg:px-[calc(100vw/12)] -mt-8">
      <div className="grid gridc-cols-1 lg:grid-cols-2 lg:max-w-[60%] gap-x-8 gap-y-8 text-center ">
        <div className="w-full border-solid rounded-md p-4 pr-12 text-left  text-black shadow-lg bg-light-grey flex items-center justify-start font-poppins text-lg">
          Cryptography and Security
        </div>
        <div className="w-full border-solid rounded-md p-4 pr-12 text-left  text-black shadow-lg bg-light-grey flex items-center justify-start font-poppins text-lg">
          Graph theory and Combinatrics
        </div>
        <div className="w-full border-solid rounded-md p-4 pr-12 text-left  text-black shadow-lg bg-light-grey flex items-center justify-start font-poppins text-lg">
          Mathematical Analysis
        </div>
        <div className="w-full border-solid rounded-md p-4 pr-12 text-left  text-black shadow-lg bg-light-grey flex items-center justify-start font-poppins text-lg">
          Optimisation Techniques and Stochastic Models
        </div>
        <div className="w-full border-solid rounded-md p-4 pr-12 text-left  text-black shadow-lg bg-light-grey flex items-center justify-start font-poppins text-lg">
          Soft Computing and Computational Mathematics
        </div>
      </div>
    </section>
  );
};

export default Section6;
