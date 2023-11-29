import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import logo from "../assets/image/51stores@3x.png";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropDown] = useState(true);

  return (
    <div className="">
      <div className="bg-lightGrey ">
        <nav className=" z-10 custom-container  h-[80px]  flex justify-between  items-center ">
          <Link href="/" className="flex items-center">
            <Image
              className="w-28"
              // width={100}
              // height={100}
              src={logo}
              alt=""
            />
          </Link>
          <div className="hidden  lg:flex  lg:items-center lg:space-x-6 max-w-4xl">
            <div
              onMouseOver={() => setShowDropDown(true)}
              className="group relative  "
            >
              <Link
                href="/"
                className={`pb-5 mt-4 font-semibold outline-none focus:outline-none py-1 rounded-sm flex items-center ${
                  router.pathname === "/" ? "text-primary" : "text-gray-800 "
                }`}
              >
                <span className=" font-semibold text-sm flex-1 pr-1 uppercase">
                  Business Type
                </span>
                <span>
                  <svg
                    className="fill-current  h-4 w-4 transform
                      transition duration-500 ease-in-out group-hover:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </Link>
              {/* {showDropdown && ( */}
              <div className="scale-up-ver-top absolute top-14 group-hover:duration-500  hidden group-hover:block -left-20 bg-gray-200 px-6 py-5 w-[700px] z-40 ">
                <h2 className="text-xl font-bold mb-2 ">Features</h2>

                <div className=" flex gap-5 flex-col lg:flex-row items-center ">
                  <Link
                    href="/restaurant"
                    className="flex  items-center space-x-4 py-5 px-4 hover:bg-white duration-150"
                  >
                    <button className="text-xl p-3 bg-secondary text-white">
                      <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                    </button>
                    <div className="">
                      <h2 className="font-bold text-sm uppercase">
                        Restaurant
                      </h2>
                      <p className="text-sm text-gray-600">
                        Real Time Inventory Sites From Materials to finish good
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/retail"
                    className="flex items-center py-5 space-x-4 px-4 hover:bg-white duration-150"
                  >
                    <button className="text-xl p-3 bg-secondary text-white">
                      <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                    </button>
                    <div className="">
                      <h2 className="font-bold text-sm uppercase">Retail</h2>
                      <p className="text-sm text-gray-600">
                        Real Time Inventory Sites From Materials to finish good
                      </p>
                    </div>
                  </Link>
                </div>
                <div className=" flex gap-5 flex-col lg:flex-row items-center ">
                  <Link
                    href="/cafe"
                    className="flex items-center py-5 space-x-4 px-4 hover:bg-white duration-150"
                  >
                    <button className="text-xl p-3 bg-secondary text-white">
                      <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                    </button>
                    <div className="">
                      <h2 className="font-bold text-sm uppercase">Cafe</h2>
                      <p className="text-sm text-gray-600">
                        Real Time Inventory Sites From Materials to finish good
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              {/* )} */}
            </div>

            <Link
              href="/pricing"
              className={`font-semibold text-sm uppercase ${
                router.pathname === "/pricing"
                  ? "text-primary"
                  : "text-gray-800 "
              }`}
            >
              Pricing
            </Link>
            {/* <Link
              href="/terms-service"
              className={`font-semibold text-sm uppercase  ${
                router.pathname === "/terms-service"
                  ? "text-primary"
                  : "text-gray-800 "
              }`}
            >
              Terms of Service
            </Link> */}
            <Link
              href="/contact"
              className={`font-semibold text-sm uppercase  ${
                router.pathname === "/contact"
                  ? "text-primary"
                  : "text-gray-800 "
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className=" hidden lg:flex space-x-5 items-center">
            <Link
              href="/contact"
              className="px-8 hover:bg-primary hover:text-white duration-200 py-[11px]  rounded-sm text-primary font-semibold tracking-wider border border-primary"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="px-6 hover:opacity-90 py-3  rounded-sm text-white font-semibold tracking-wider bg-primary"
            >
              Start Free Trial
            </Link>
          </div>
          <div className="lg:hidden flex space-x-3 items-center">
            <div className="">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="drawer-button flex items-end  text-3xl text-black-600 py-3"
              >
                <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* // for mobile */}

      {isMenuOpen && (
        <div className=" duration-500 transition-all navbar-menu relative z-50 lg:hidden ">
          <div className=" fixed inset-0 bg-transparent"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-lightGrey border-r overflow-y-auto scale-up-hor-left bg-white">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center">
                <Image className="w-28" src={logo} alt="" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="navbar-close"
              >
                <svg
                  className="h-6 w-6 text-gray-900 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className=" flex flex-col ">
              <div className="group  ">
                <Link
                  href="/"
                  className={`hover:bg-gray-200 py-3 mb-1 px-2 w-full font-semibold text-[18px] outline-none focus:outline-none rounded-sm flex items-center ${
                    router.pathname === "/" ? "text-primary" : "text-black-800 "
                  }`}
                >
                  <span className=" font-medium flex-1 pr-1">Use Cases</span>
                  {showDropdown ? (
                    <p
                      onClick={() => setShowDropDown(false)}
                      className="6xl text-primary font-bold pl-10 pr-3"
                    >
                      x
                    </p>
                  ) : (
                    <span onClick={() => setShowDropDown(true)}>
                      <svg
                        className={`fill-current mt-2 h-6 w-6 transform
                      transition duration-150 ease-in-out  ${
                        showDropdown ? "-rotate-180" : "-rotate-180"
                      }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  )}
                </Link>
                {showDropdown ? (
                  <div className="scale-up-ver-top top-16 group-hover:block bg-gray-200 px-3 py-5 w-full lg:w-[700px] ">
                    <h2 className="text-xl font-bold mb-2 ">Features</h2>
                    <div className=" flex gap-2 flex-col lg:flex-row items-center ">
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        href="/retail"
                        className="flex items-center py-5 space-x-4 px-2 hover:bg-white duration-150"
                      >
                        <button className="text-xl p-3 bg-primary text-white">
                          <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                        </button>
                        <div className="">
                          <h2 className="font-bold text-sm uppercase">
                            Retail
                          </h2>
                          <p className="text-sm text-gray-600">
                            Real Time Inventory Sites From Materials to finish
                            good
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className=" flex gap-2 flex-col lg:flex-row items-center ">
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        href="cafe"
                        className="flex  items-center space-x-4 py-5 px-2 hover:bg-white duration-150"
                      >
                        <button className="text-xl p-3 bg-primary text-white">
                          <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                        </button>
                        <div className="">
                          <h2 className="font-bold text-sm uppercase">Cafe</h2>
                          <p className="text-sm text-gray-600">
                            Real Time Inventory Sites From Materials to finish
                            good
                          </p>
                        </div>
                      </Link>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        href="/restaurant"
                        className="flex items-center py-5 space-x-4 px-2 hover:bg-white duration-150"
                      >
                        <button className="text-xl p-3 bg-primary text-white">
                          <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                        </button>
                        <div className="">
                          <h2 className="font-bold text-sm uppercase">
                            Restaurant
                          </h2>
                          <p className="text-sm text-gray-600">
                            Real Time Inventory Sites From Materials to finish
                            good
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/pricing"
                className={`font-semibold mt-1 text-sm hover:bg-gray-200 py-3 px-2 ${
                  router.pathname === "/" ? "text-primary" : "text-black-800 "
                }`}
              >
                Pricing
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/contact"
                className={`font-semibold text-sm hover:bg-gray-200 py-3 px-2 ${
                  router.pathname === "/" ? "text-primary" : "text-black-800 "
                }`}
              >
                Contact Us
              </Link>

              <div className="flex space-x-2 items-center mt-5">
                <Link
                  href="/"
                  className="px-6 hover:bg-primary hover:text-white duration-200 py-[7px]  rounded-sm text-primary font-semibold tracking-wider border border-primary"
                >
                  Login
                </Link>
                <Link
                  href="/"
                  className="px-4 hover:opacity-90 py-2  rounded-sm text-white font-semibold tracking-wider bg-primary"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
