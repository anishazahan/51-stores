import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
const OptionalPricing = () => {
  return (
    <div>
      <section>
        <div className="custom-container px-5  ">
          <div className="rounded-xl bg-neutral-100 px-6 py-12 sm:px-12 ">
            <div className="mx-auto mb-8 flex max-w-3xl flex-col text-center md:mb-12 lg:mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">
                Optional add-ons
              </h2>

              <div className="mx-auto mt-4 rounded-[60px] bg-[#c4c4c4] px-6 py-2">
                <p className="text-sm sm:text-base">
                  30 days money-back guarantee
                </p>
              </div>
            </div>

            <div className="mx-auto grid h-auto w-full gap-4 rounded-md px-0 pb-12 lg:grid-cols-2">
              <div className="grid grid-cols-1 gap-4 rounded-md border border-[#dad7d7] bg-[#d9d9d9] px-10 py-14 sm:grid-cols-2">
                <div className="flex flex-row items-center gap-2">
                  <button className="mr-2 text-2xl text-primary">
                    <MdOutlineRadioButtonUnchecked />
                  </button>

                  <p className="text-sm sm:text-base">Premium Designs</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <button className="mr-2 text-2xl text-primary">
                    <MdOutlineRadioButtonUnchecked />
                  </button>
                  <p className="text-sm sm:text-base">Regular updates</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <button className="mr-2 text-2xl text-primary">
                    <MdOutlineRadioButtonUnchecked />
                  </button>
                  <p className="text-sm sm:text-base">Copy &amp; Paste</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <button className="mr-2 text-2xl text-primary">
                    <MdOutlineRadioButtonUnchecked />
                  </button>
                  <p className="text-sm sm:text-base">Lifetime Access</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <button className="mr-2 text-2xl text-primary">
                    <MdOutlineRadioButtonUnchecked />
                  </button>
                  <p className="text-sm sm:text-base">Early bird price</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <button className="mr-2 text-2xl text-primary">
                    <MdOutlineRadioButtonUnchecked />
                  </button>
                  <p className="text-sm sm:text-base">Premium Support</p>
                </div>
              </div>

              <div className="flex flex-col rounded-md bg-secondary px-10 py-12 text-white">
                <div className="flex w-full flex-col items-center justify-between sm:flex-row sm:items-center">
                  <h2 className="text-3xl font-bold md:text-5xl">
                    $149
                    <span className="text-sm font-light sm:text-sm">
                      /month
                    </span>
                  </h2>
                  <a
                    href="#"
                    className="mt-4 rounded-md bg-white px-6 py-3 text-center font-semibold text-black md:mt-0"
                  >
                    Get started
                  </a>
                </div>
                <div className="mb-6 mt-6 border-[0.5px] border-neutral-300"></div>
                <p className="text-white max-[479px]:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam,purus sit amet luctus magna fringilla urna
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptionalPricing;
