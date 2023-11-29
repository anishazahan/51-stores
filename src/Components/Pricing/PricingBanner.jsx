import Link from "next/link";
import React from "react";

const PricingBanner = () => {
  return (
    <div
      className={`pricing-banner h-full flex justify-center items-center flex-col`}
    >
      <p className="text-3xl font-semibold mb-3 max-w-xl text-white text-center px-5 pb-[36px]">
        Risk-Free Trial: Try it for 14 days, on us. 100% satisfaction guaranteed
      </p>
      <div className="">
        <Link
          href="/"
          className="px-9 py-4 mt-5 rounded-lg text-primary font-semibold bg-white"
        >
          Reach Out To Our Expert Team
        </Link>
      </div>
    </div>
  );
};

export default PricingBanner;
