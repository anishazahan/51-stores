import { MdOutlineSettingsInputAntenna } from "react-icons/md";

const SimplePricing = () => {
  return (
    <div>
      <section>
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-24">
          <div className="max-w-2xl text-center">
            <h1 className="text-[32px] font-bold leading-[45px] text-black lg:text-[40px] lg:leading-[52px]">
              Limited Offer Inside
            </h1>
            <p className="font-inter mt-3 text-base font-light text-gray-500">
              No ads. No trails. No commitments
            </p>
          </div>

          <div className="mt-12 flex flex-col rounded-md bg-[#f2f2f7] px-5 py-10 text-black lg:flex-row lg:px-10">
            <div className="flex w-full flex-col px-5 lg:w-[50%] space-y-10">
              <div className="items-center flex flex-row space-x-4">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
                <div>
                  <h2 className="text-xl font-medium text-black">Support</h2>
                  <p className="font-inter mt-2 font-light text-gray-500">
                    Handcrafted by proffessional designers
                  </p>
                </div>
              </div>
              <div className="items-center flex flex-row space-x-4">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
                <div>
                  <h2 className="text-xl font-medium text-black">
                    Copy & Paste
                  </h2>
                  <p className="font-inter mt-2 font-light text-gray-500">
                    Use simply by copy and pasting the code into your project
                  </p>
                </div>
              </div>
              <div className="items-center flex flex-row space-x-4">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
                <div>
                  <h2 className="text-xl font-medium text-black">Resource</h2>
                  <p className="font-inter mt-2 font-light text-gray-500">
                    Get early access at a discounted price
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-5 hidden h-[350px] border-[0.5px] border-gray-300 opacity-50 lg:block"></div>

            <div className="flex w-full flex-col px-5 lg:w-[50%]  space-y-10 mt-10 lg:mt-0">
              <div className="items-center flex flex-row space-x-4">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
                <div>
                  <h2 className="text-xl font-medium text-black">Quality</h2>
                  <p className="font-inter mt-2 font-light text-gray-500">
                    We release new components each week
                  </p>
                </div>
              </div>
              <div className="items-center flex flex-row space-x-4">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
                <div>
                  <h2 className="text-xl font-medium text-black">Speed</h2>
                  <p className="font-inter mt-2 font-light text-gray-500">
                    Get access to all current & future components for life
                  </p>
                </div>
              </div>
              <div className="items-center flex flex-row space-x-4">
                <button className="text-xl p-3 bg-primary text-white inline">
                  <MdOutlineSettingsInputAntenna></MdOutlineSettingsInputAntenna>
                </button>
                <div>
                  <h2 className="text-xl font-medium text-black">
                    Flexibility
                  </h2>
                  <p className="font-inter mt-2 font-light text-gray-500">
                    Gain access to an exclusive community to vote on future
                    packs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="mt-12 text-4xl font-bold text-black">$79/year</h1>
          <button className="my-6 rounded-md bg-primary px-9 py-3 text-base font-bold text-white">
            Purchase
          </button>
          <p className="font-inter text-base font-light text-gray-500">
            30 days money back guarantee
          </p>
        </div>
      </section>
    </div>
  );
};

export default SimplePricing;
