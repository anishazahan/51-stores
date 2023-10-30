import Image from "next/image";
import React from "react";
import logo from "../assets/image/51-cash-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black/90">
        <div className="mx-auto custom-container pt-10 ">
          <div className="grid grid-cols-[auto_1fr] justify-between gap-10 sm:grid-cols-3 lg:grid-cols-[0.45fr_auto_auto_auto]">
            <div className="flex max-w-[400px] flex-col gap-8 max-[991px]:[grid-area:span_1/span_3/span_1/span_3] max-[700px]:[grid-area:span_1/span_2/span_1/span_2]">
              <Link href="/" className="flex items-center">
                <Image
                  className="w-12 h-12"
                  width={100}
                  height={100}
                  src={logo}
                  alt=""
                />
                <h2 className="text-xl font-RightRegular font-medium text-white tracking-wide ">
                  Cash
                </h2>
              </Link>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus
              </p>
              <div className="mx-0 mb-4 w-full">
                <form
                  name="email-form"
                  method="get"
                  className="relative flex max-w-full items-center justify-center"
                >
                  <input
                    type="email"
                    className="m-0 block h-full max-h-8 w-full rounded-lg outline-none border-0 bg-[#101010] px-3 py-6 align-middle text-sm text-gray-300  focus:outline-0"
                    maxlength="256"
                    name="email-4"
                    placeholder="Enter your email"
                    required=""
                  />
                  <div className="absolute bottom-[0%] left-[auto] right-[5%] top-[25%] text-primary">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9752 3.02708C20.7866 2.83863 20.5512 2.70382 20.2932 2.63651C20.0353 2.5692 19.764 2.57182 19.5074 2.64411L2.0391 7.57102C1.74519 7.65391 1.48358 7.82454 1.28924 8.0601C1.0949 8.29565 0.977084 8.58491 0.951545 8.88922C0.926006 9.19353 0.993958 9.49838 1.14632 9.76303C1.29868 10.0277 1.52819 10.2395 1.80418 10.3702L9.11045 13.8311L14.1057 8.83591C14.2463 8.69525 14.4371 8.61623 14.636 8.61623C14.835 8.61623 15.0257 8.69525 15.1664 8.83591C15.3071 8.97657 15.3861 9.16735 15.3861 9.36628C15.3861 9.5652 15.3071 9.75598 15.1664 9.89664L10.1712 14.8919L13.6321 22.1981C13.7519 22.4552 13.9429 22.6726 14.1823 22.8246C14.4218 22.9767 14.6997 23.057 14.9834 23.0562C15.0263 23.0562 15.0696 23.0544 15.1131 23.0508C15.418 23.0269 15.708 22.9097 15.9439 22.7151C16.1798 22.5205 16.35 22.258 16.4313 21.9632L21.3582 4.49494C21.4304 4.2383 21.433 3.96707 21.3657 3.7091C21.2984 3.45112 21.1636 3.21572 20.9752 3.02708Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="submit"
                    value="Subscribe"
                    className="absolute bottom-[0%] left-[auto] right-[0%] top-[0%] m-0 inline-block cursor-pointer rounded-[60px] border border-solid border-primary bg-primary px-6 py-4 text-center font-bold text-black no-underline opacity-0 transition hover:border-black hover:bg-white"
                  />
                </form>
              </div>
              <div>
                <p className="font-bold uppercase text-gray-500">email us</p>
                <p className="text-gray-300 text-sm">51cash@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-start font-semibold">
              <p className="mb-4 text-sm font-medium text-white">Solution</p>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Marketing
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Analytics
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Commerce
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Insights
              </Link>
            </div>
            <div className="flex flex-col items-start font-semibold">
              <p className="mb-4 text-sm font-medium text-white">Support</p>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Documentation
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Guides
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                API&nbsp;Status
              </Link>
            </div>
            <div className="flex flex-col items-start font-semibold">
              <p className="mb-4 text-sm font-medium text-white">Company</p>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                About
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Jobs
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Press
              </Link>
              <Link
                href="/"
                className="py-2 text-sm font-bold text-gray-400 transition hover:text-white"
              >
                Partners
              </Link>
            </div>
          </div>
          <div className="my-10 w-full border border-solid border-[#101010]"></div>
          <div className="flex flex-col items-center justify-between md:flex-row pb-16">
            <div className="flex-none">
              <p className="text-gray-300 text-sm">
                © Copyright 2021. All rights reserved.
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/"
                className="inline-block py-2 pl-5 pr-0 font-bold text-gray-300 text-sm transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="inline-block py-2 pl-5 pr-0 font-bold text-gray-300 text-sm transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
              >
                License
              </Link>
              <Link
                href="/"
                className="inline-block py-2 pl-5 pr-0 font-bold text-gray-300 text-sm transition hover:text-white max-[479px]:px-2.5 lg:pl-12"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
