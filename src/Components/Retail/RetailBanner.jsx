import React from "react";

const RetailBanner = () => {
  return (
    <div className={`RetailImg relative`}>
      <div className="absolute inset-0 w-full h-full bg-black/30 z-0"></div>
      <div className="z-10 absolute h-full w-full flex flex-col items-center lg:items-start  justify-center">
        <h2 className="font-bold text-3xl lg:text-6xl max-w-4xl text-white text-center mx-auto px-2">
          Elevate Your Retail Business with 51Store POS System
        </h2>
        <h2 className="font-bold text-xl lg:text-2xl mx-auto text-white text-center mt-10 px-5">
          Intuitive and easy-to-use point of sale to run a retail business
        </h2>
      </div>
    </div>
  );
};

export default RetailBanner;
