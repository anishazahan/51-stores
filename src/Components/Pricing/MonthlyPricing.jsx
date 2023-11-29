import Link from "next/link";
import React from "react";

const MonthlyPricing = () => {
  return (
    <div>
      <section>
        <div className="custom-container pb-16 ">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            <div className="mx-auto w-full max-w-md group">
              <div className="rounded-md bg-[#f2f2f7] group-hover:bg-primary duration-300 p-10">
                <div className="mb-4 w-fit rounded-[4px] bg-primary group-hover:bg-white px-4 py-1.5">
                  <p className="text-sm font-bold text-white group-hover:text-black hover">
                    Free Plan
                  </p>
                </div>
                <h2 className="mb-5 group-hover:text-white text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
                  $99<span className="text-sm font-light">/Month</span>
                </h2>
                <p className="text-body mb-5 font-light text-gray-800 md:mb-6 lg:mb-8">
                  Basic inventory management features, suitable for small
                  businesses.
                </p>
                <Link
                  href="#"
                  className="inline-block w-full rounded-md bg-primary group-hover:bg-white px-6 py-3 text-center font-semibold group-hover:text-black text-white"
                >
                  Get started
                </Link>
              </div>

              <div className="mt-10 space-y-4 ">
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Premium Component{" "}
                    </span>{" "}
                    Basic inventory tracking
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Exclusive Freebies
                    </span>{" "}
                    Limited product categories
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Monthly Free Exclusive
                    </span>{" "}
                    Email support
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Customer Support
                    </span>{" "}
                    Basic inventory tracking
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-md bg-primary p-10 text-white sm:w-full sm:flex-initial">
                <div className="mb-4 flex flex-row gap-4 max-[991px]:flex-wrap">
                  <div className="rounded-[4px] bg-white text-primary px-4 py-1.5">
                    <p className="text-sm font-bold text-primary">Growth</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-[4px] bg-white px-4 py-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 22h-18v-4h18v4zm-2.266-12.906c-3.749 2.293-5.296-2.125-6.734-7.094-1.433 4.951-2.984 9.388-6.734 7.094-1.305-.798-5.266-4.094-5.266-4.094 1.796 3.797 2.75 6.292 3 11h18c.25-4.708 1.203-7.203 3-11 0 0-3.961 3.296-5.266 4.094z" />
                    </svg>
                    <p className="text-sm font-bold text-black sm:text-sm">
                      Popular
                    </p>
                  </div>
                </div>
                <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">
                  $149<span className="text-sm font-light">/Month</span>
                </h2>
                <p className="text-body mb-5 font-light text-gray-300 md:mb-6 lg:mb-8">
                  Advanced features for growing businesses with increased
                  inventory needs.
                </p>
                <a
                  href="#"
                  className="inline-block w-full rounded-md bg-white px-6 py-3 text-center font-semibold text-black"
                >
                  Get started
                </a>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Premium Component{" "}
                    </span>{" "}
                    Advanced inventory tracking
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Exclusive Freebies
                    </span>{" "}
                    Unlimited product categories
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Monthly Free Exclusive
                    </span>{" "}
                    Priority email support
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Customer Support
                    </span>{" "}
                    Advanced inventory tracking
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md group">
              <div className="rounded-md bg-[#f2f2f7] duration-300 group-hover:bg-primary  p-10">
                <div className="mb-4 w-fit rounded-[4px] bg-primary group-hover:bg-white px-4 py-1.5">
                  <p className="text-sm font-bold text-white group-hover:text-black">
                    Accelerate
                  </p>
                </div>
                <h2 className="mb-5 text-3xl group-hover:text-white font-bold md:mb-6 md:text-5xl lg:mb-8">
                  $249<span className="text-sm font-light">/Month</span>
                </h2>
                <p className="text-body mb-5 font-light text-gray-800 md:mb-6 lg:mb-8">
                  Comprehensive features for large enterprises with complex
                  inventory management requirements.
                </p>
                <a
                  href="#"
                  className="inline-block w-full rounded-md bg-primary group-hover:bg-white px-6 py-3 text-center font-semibold text-white group-hover:text-black"
                >
                  Get started
                </a>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Premium Component{" "}
                    </span>{" "}
                    Comprehensive inventory management
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Exclusive Freebies
                    </span>{" "}
                    Advanced reporting
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Monthly Free Exclusive
                    </span>{" "}
                    24/7 customer support
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="32"
                      viewBox="0 0 24 8"
                    >
                      <path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z" />
                    </svg>
                  </div>
                  <p className="text-body text-[#636262]">
                    <span className="font-bold text-black">
                      Customer Support
                    </span>{" "}
                    24/7 customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlyPricing;
