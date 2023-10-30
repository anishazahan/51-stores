import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import img from "../../assets/image/user.jpeg";

const Testimonial = () => {
  return (
    <div>
      <section class="relative my-20">
        <div class="mx-auto custom-container ">
          <div class="mx-auto w-full max-w-3xl">
            <div class="text-center">
              <h2 class="text-3xl font-semibold md:text-5xl">
                What{" "}
                <span class="bg-contain bg-center  bg-no-repeat px-4 ">
                  our clients
                </span>{" "}
                are saying
              </h2>
              <div class="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p class="text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam,purus sit amet luctus magna fringilla urna
                </p>
              </div>
            </div>
          </div>
          <div class="mb-8 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 lg:grid-cols-3 md:gap-8 lg:mb-16">
            <div class="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-between gap-6 rounded border border-gray-300 hover:shadow bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
              <div class="mb-4 flex flex-col items-center">
                <h6 class="text-base font-semibold">Harry Peter</h6>
                <p class="text-sm text-[#636262]">Designer</p>
              </div>
              <p class="mb-4 text-[#636262] text-sm">
                “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis"
              </p>
              <div class="flex space-x-1 items-center">
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
              </div>
              <div class="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:#be185d_0px_3px]">
                <Image
                  src={img}
                  alt=""
                  class="inline-block h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div class="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-between gap-6 rounded border border-gray-300 hover:shadow bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
              <div class="mb-4 flex flex-col items-center">
                <h6 class="text-base font-semibold">Harry Peter</h6>
                <p class="text-sm text-[#636262]">Designer</p>
              </div>
              <p class="mb-4 text-[#636262] text-sm">
                “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis"
              </p>
              <div class="flex items-center space-x-1">
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
              </div>
              <div class="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:#be185d_0px_3px]">
                <Image
                  src={img}
                  alt=""
                  class="inline-block h-full object-cover w-full rounded-full"
                />
              </div>
            </div>
            <div class="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-center gap-6 rounded border border-gray-300 hover:shadow bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
              <div class="mb-4 flex flex-col items-center">
                <h6 class="text-base font-semibold">Harry Peter</h6>
                <p class="text-sm text-[#636262]">Designer</p>
              </div>
              <p class="mb-4 text-[#636262] text-sm">
                “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis"
              </p>
              <div class="flex space-x-1 items-center">
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
                <button className="text-xl text-pink-600">
                  <AiFillStar></AiFillStar>
                </button>
              </div>
              <div class="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:#be185d_0px_3px]">
                <Image
                  src={img}
                  alt=""
                  class="inline-block object-cover h-full w-full rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              href="/"
              class="ml-auto flex items-center justify-end  rounded border border-primary text-primary px-8 py-3 space-x-1 font-semibold"
            >
              <button class="inline-block  ">See More</button>
              <button className="text-primary mt-1">
                <BsArrowRight></BsArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
