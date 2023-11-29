import Image from "next/image";
import React from "react";
import logo from "../assets/image/51stores@3x.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer class="block bg-black/90">
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 ">
          <div class="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
            <div class="max-[767px]: w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial">
              <Link href="/" className="flex items-center">
                <Image className="w-28" src={logo} alt="" />
              </Link>
              <p className="text-gray-400 text-sm mt-5">
                Whether you're buying and reselling or manufacturing your
                products 51 store supports the operations you need to grow your
                business.
              </p>
            </div>
            <div class="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8">
              <div class="mb-4 flex flex-col max-w-[272px] items-start justify-start">
                <p class="text-gray-300 max-[550px]:text-sm whitespace-nowrap mb-2 font-semibold">
                  {" "}
                  Inventory Management  &  POS System
                </p>
                <div className="pl-2 flex flex-col space-y-1 mt-1">
                  <Link
                    href="/cafe"
                    class="text-gray-300 max-[479px]:text-sm hover:text-primary"
                  >
                    {" "}
                    Restaurant & Cafeteria
                  </Link>
                  <Link
                    href="/retail"
                    class="text-gray-300 max-[479px]:text-sm hover:text-primary"
                  >
                    {" "}
                    Retails Shop & Supper Market
                  </Link>
                  <Link
                    href="/restaurant"
                    class="text-gray-300 max-[479px]:text-sm hover:text-primary"
                  >
                    {" "}
                    Shops & Bar
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-8 mt-8 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
          <div class="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
            <div class="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
              <a
                href="/terms-service"
                class="inline-block py-1.5 pr-6  text-gray-300 transition hover:text-primary font-semibold sm:py-2 sm:pr-6 lg:pr-12"
              >
                Terms of Service
              </a>
              <a
                href="/pricing"
                class="inline-block py-1.5 pr-6 text-gray-300 transition hover:text-primary font-semibold sm:py-2 sm:pr-6 lg:pr-12"
              >
                Pricing
              </a>
              <a
                href="/contact"
                class="inline-block py-1.5 pr-6 text-gray-300 transition hover:text-primary font-semibold sm:py-2 sm:pr-6 lg:pr-12"
              >
                Contact
              </a>
            </div>
            <div class="max-[991px]:flex-none">
              <p class="text-gray-300 max-[479px]:text-sm">
                {" "}
                © Copyright 2023. All rights reserved by{" "}
                <span className="text-secondary font-semibold">51 stores.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
