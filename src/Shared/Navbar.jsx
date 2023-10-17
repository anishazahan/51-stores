import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);

  return (
    <div className="">
      <div className="shadow ">
        <nav className=" z-10 custom-container  py-4  flex justify-between  items-center ">
          <Link href="/" className="flex items-center">
            {/* <Image width={100} height={100} src={darkLogo} alt="" /> */}
            <h2 className="text-xl font-bold text-primary">logo</h2>
          </Link>
          <div className="hidden  lg:flex  lg:items-center lg:space-x-6 max-w-4xl">
            <div
              onMouseOver={() => setShowDropDown(true)}
              className="group relative "
            >
              <Link
                href="/"
                className={`font-semibold text-[18px] outline-none focus:outline-none py-1 bg-white rounded-sm flex items-center ${
                  router.pathname === "/" ? "text-primary" : "text-gray-800 "
                }`}
              >
                <span className=" font-medium flex-1 pr-1">Use Cases</span>
                <span>
                  <svg
                    className="fill-current mt-2 h-6 w-6 transform
                      transition duration-150 ease-in-out group-hover:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </Link>
              {showDropdown && (
                <div className="absolute top-12  bg-gray-200 px-6 py-5 w-[700px] ">
                  <h2 className="text-xl font-bold mb-2 ">Features</h2>
                  <div className=" flex gap-5 flex-col lg:flex-row items-center ">
                    <div className="flex  items-center space-x-4 py-5 px-4 hover:bg-white duration-150">
                      <button className="text-xl p-3 bg-primary text-white">
                        <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                      </button>
                      <div className="">
                        <h2 className="font-bold text-sm uppercase">
                          Inventory Management
                        </h2>
                        <p className="text-sm text-gray-600">
                          Real Time Inventory Sites From Materials to finish
                          good
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center py-5 space-x-4 px-4 hover:bg-white duration-150">
                      <button className="text-xl p-3 bg-primary text-white">
                        <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                      </button>
                      <div className="">
                        <h2 className="font-bold text-sm uppercase">
                          Inventory Management
                        </h2>
                        <p className="text-sm text-gray-600">
                          Real Time Inventory Sites From Materials to finish
                          good
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex gap-5 flex-col lg:flex-row items-center ">
                    <div className="flex  items-center space-x-4 py-5 px-4 hover:bg-white duration-150">
                      <button className="text-xl p-3 bg-primary text-white">
                        <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                      </button>
                      <div className="">
                        <h2 className="font-bold text-sm uppercase">
                          Inventory Management
                        </h2>
                        <p className="text-sm text-gray-600">
                          Real Time Inventory Sites From Materials to finish
                          good
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center py-5 space-x-4 px-4 hover:bg-white duration-150">
                      <button className="text-xl p-3 bg-primary text-white">
                        <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                      </button>
                      <div className="">
                        <h2 className="font-bold text-sm uppercase">
                          Inventory Management
                        </h2>
                        <p className="text-sm text-gray-600">
                          Real Time Inventory Sites From Materials to finish
                          good
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/project"
              className={`font-semibold text-[18px]  ${
                router.pathname === "/project"
                  ? "text-primary"
                  : "text-gray-800 "
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`font-semibold text-[18px]  ${
                router.pathname === "/blog" ? "text-primary" : "text-gray-800 "
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
                className="drawer-button flex items-end text-white text-3xl text-black-600 py-3"
              >
                <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* // for mobile */}

      {isMenuOpen && (
        <div className="duration-500 transition-all navbar-menu relative z-50 lg:hidden ">
          <div className=" fixed inset-0 bg-transparent"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-zinc-900 border-r overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center">
                {/* <Image width="" height="" src={darkLogo} alt="" /> */}
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="navbar-close"
              >
                <svg
                  className="h-6 w-6 text-gray-200 cursor-pointer hover:text-gray-500"
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

            <div className="space-y-6 flex flex-col items-center">
              <Link
                duration={500}
                href="/"
                className={`font-semibold ${
                  router.pathname === "/" ? "text-primary" : "text-gray-200 "
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`font-semibold ${
                  router.pathname === "/about"
                    ? "text-primary"
                    : "text-gray-200 "
                }`}
              >
                About
              </Link>

              <Link
                href="/service"
                className={`font-semibold ${
                  router.pathname === "/service"
                    ? "text-primary"
                    : "text-gray-200 "
                }`}
              >
                Services
              </Link>

              <Link
                href="/project"
                className={`font-semibold ${
                  router.pathname === "/project"
                    ? "text-primary"
                    : "text-gray-200 "
                }`}
              >
                Project
              </Link>
              <Link
                href="/blog"
                className={`font-semibold ${
                  router.pathname === "/blog"
                    ? "text-primary"
                    : "text-gray-200 "
                }`}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className={`font-semibold ${
                  router.pathname === "/contact"
                    ? "text-primary"
                    : "text-gray-200 "
                }`}
              >
                Conatct
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
