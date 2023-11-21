import Link from "next/link";
import React from "react";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { featureData } from "./featuredData";

const Feature = () => {
  return (
    <div>
      <section className="bg-[#f7f6f2]">
        {/* <!-- Container --> */}
        <div className="mx-auto custom-container py-16 ">
          {/* <!-- Heading --> */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
              Make every step user-centric
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>
          </div>
          {/* <!-- Features --> */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-4 shadow hover:shadow-lg bg-white p-8 cursor-pointer"
              >
                <div className="inline-block">
                  <button className="text-xl p-3 bg-primary text-white inline">
                    {item.icon}
                  </button>
                </div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm text-[#636262]">{item.description}</p>

                <Link
                  href={`/features/${encodeURIComponent(
                    item.title.toLowerCase()
                  )}`}
                >
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-primary">
                      Learn More
                    </p>
                    <button className="text-sm mt-1 text-primary">
                      <BsArrowRight />
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
