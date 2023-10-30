import Link from "next/link";
import React from "react";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Feature = () => {
  return (
    <div>
      <section class="bg-[#f7f6f2]">
        {/* <!-- Container --> */}
        <div class="mx-auto custom-container py-16 ">
          {/* <!-- Heading --> */}
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="mb-4 mt-6 text-3xl font-bold md:text-5xl">
              Make every step user-centric
            </h2>
            <p class="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>
          </div>
          {/* <!-- Features --> */}
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Item --> */}
            <div class="grid grid-cols-1 gap-4 shadow hover:shadow-lg bg-white p-8 ">
              <div className="inline-block">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
              </div>
              <p class="text-xl font-semibold">Support</p>
              <p class="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <Link href="/" className="flex items-center space-x-2">
                <p className="text-sm font-medium text-primary">Learn More</p>
                <button className="text-sm mt-1 text-primary">
                  <BsArrowRight></BsArrowRight>
                </button>
              </Link>
            </div>
            {/* <!-- Item --> */}
            <div class="grid grid-cols-1 gap-4 shadow hover:shadow-lg bg-white p-8 ">
              <div className="inline-block">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
              </div>
              <p class="text-xl font-semibold">Resource</p>
              <p class="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <Link href="/" className="flex items-center space-x-2">
                <p className="text-sm font-medium text-primary">Learn More</p>
                <button className="text-sm mt-1 text-primary">
                  <BsArrowRight></BsArrowRight>
                </button>
              </Link>
            </div>
            {/* <!-- Item --> */}
            <div class="grid grid-cols-1 gap-4 shadow hover:shadow-lg bg-white p-8 ">
              <div className="inline-block">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
              </div>
              <p class="text-xl font-semibold">Quality</p>
              <p class="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <Link href="/" className="flex items-center space-x-2">
                <p className="text-sm font-medium text-primary">Learn More</p>
                <button className="text-sm mt-1 text-primary">
                  <BsArrowRight></BsArrowRight>
                </button>
              </Link>
            </div>
            {/* <!-- Item --> */}
            <div class="grid grid-cols-1 gap-4 shadow hover:shadow-lg bg-white p-8 ">
              <div className="inline-block">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
              </div>
              <p class="text-xl font-semibold">Speed</p>
              <p class="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <Link href="/" className="flex items-center space-x-2">
                <p className="text-sm font-medium text-primary">Learn More</p>
                <button className="text-sm mt-1 text-primary">
                  <BsArrowRight></BsArrowRight>
                </button>
              </Link>
            </div>
            {/* <!-- Item --> */}
            <div class="grid grid-cols-1 gap-4 shadow hover:shadow-lg bg-white p-8 ">
              <div className="inline-block">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
              </div>
              <p class="text-xl font-semibold">Flexibility</p>
              <p class="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <Link href="/" className="flex items-center space-x-2">
                <p className="text-sm font-medium text-primary">Learn More</p>
                <button className="text-sm mt-1 text-primary">
                  <BsArrowRight></BsArrowRight>
                </button>
              </Link>
            </div>
            {/* <!-- Item --> */}
            <div class="grid grid-cols-1 gap-4 shadow hover:shadow-lg bg-white p-8 ">
              <div className="inline-block">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
              </div>
              <p class="text-xl font-semibold">Organise</p>
              <p class="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
              <Link href="/" className="flex items-center space-x-2">
                <p className="text-sm font-medium text-primary">Learn More</p>
                <button className="text-sm mt-1 text-primary">
                  <BsArrowRight></BsArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
