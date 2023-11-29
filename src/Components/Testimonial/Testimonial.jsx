import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import img from "../../assets/image/user.jpeg";

const Testimonial = () => {
  return (
    <div>
      <section className="relative my-20">
        <div className="mx-auto custom-container ">
          <div className="mx-auto w-full max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-5xl">
                What{" "}
                <span className="bg-contain bg-center  bg-no-repeat px-4 ">
                  our clients
                </span>{" "}
                are saying
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#636262]">
                  51 store really has transformed the way we look at taking,
                  tracking, and managing transactions.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 lg:grid-cols-3 md:gap-8 lg:mb-16">
            <div className="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-between gap-6 rounded border border-gray-300 hover:shadow bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
              <div className="mb-4 flex flex-col items-center">
                <h6 className="text-base font-semibold">Harry Peter</h6>
                <p className="text-sm text-[#636262]">Designer</p>
              </div>
              <p className="mb-4 text-[#636262] text-sm">
                51 store system is easy to program and to use, besides it is so
                easy to add pictures to aid staff as well.
              </p>
              <div className="flex space-x-1 items-center">
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
              <div className="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:#be185d_0px_3px]">
                <Image
                  src={img}
                  alt=""
                  className="inline-block h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-between gap-6 rounded border border-gray-300 hover:shadow bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
              <div className="mb-4 flex flex-col items-center">
                <h6 className="text-base font-semibold">Harry Peter</h6>
                <p className="text-sm text-[#636262]">Designer</p>
              </div>
              <p className="mb-4 text-[#636262] text-sm">
                51 store has helped us manage our business easily regardless of
                distance.
              </p>
              <div className="flex items-center space-x-1">
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
              <div className="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:#be185d_0px_3px]">
                <Image
                  src={img}
                  alt=""
                  className="inline-block h-full object-cover w-full rounded-full"
                />
              </div>
            </div>
            <div className="relative mb-4 flex grid-cols-1 flex-col place-items-center justify-center gap-6 rounded border border-gray-300 hover:shadow bg-white px-8 pb-8 pt-16 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-16 lg:mb-4">
              <div className="mb-4 flex flex-col items-center">
                <h6 className="text-base font-semibold">Harry Peter</h6>
                <p className="text-sm text-[#636262]">Designer</p>
              </div>
              <p className="mb-4 text-[#636262] text-sm">
                51 store really has transformed the way we look at taking,
                tracking, and managing transactions.
              </p>
              <div className="flex space-x-1 items-center">
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
              <div className="absolute bottom-[auto] left-[auto] right-[50%] top-[-32px] flex h-16 w-16 translate-x-1/2 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:#be185d_0px_3px]">
                <Image
                  src={img}
                  alt=""
                  className="inline-block object-cover h-full w-full rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              href="/"
              className="ml-auto flex items-center justify-end  rounded border border-primary text-primary px-8 py-3 space-x-1 font-semibold"
            >
              <button className="inline-block  ">See More</button>
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
