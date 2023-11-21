import Image from "next/image";
import img from "../../assets/image/user.jpeg";

const ContactForm = () => {
  return (
    <div>
      <section>
        <div className="mx-auto w-full custom-container px-5 pt-16  md:pt-24 lg:pt-32">
          <div className="grid items-center gap-4 sm:gap-20 lg:grid-cols-2">
            <div className="flex m flex-col items-start">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Let's build something exciting together!
              </h2>
              <p className="mb-6 max-w-lg pb-4 text-[#636262]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
              <p className="mb-8 max-w-lg text-[#647084]">
                Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                amet luctus venenatis elit ut aliquam, purus sit amet luctus
                venenatis
              </p>
              <div className="flex">
                <Image
                  src={img}
                  alt=""
                  className="mr-4 inline-block h-16 w-16 object-cover"
                />
                <div className="flex flex-col">
                  <h6 className="font-bold">Laila Bahar</h6>
                  <p className="text-sm text-[#636262]">Designer</p>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="form">
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-between ">
                    <div className="flex flex-col w-full relative ">
                      <label
                        className="text-[14px] absolute z-10 -mt-2 pl-1 bg-white pr-1 left-[16px] text-[#4A5454] font-semibold"
                        htmlFor="name"
                      >
                        First Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        className="py-4 pl-[17px] placeholder-[#A0A0A0] placeholder-[12px] text-[12px] border border-[#D9D9D9] rounded-lg outline-none"
                        required
                        type="text"
                        placeholder="Ryan roslansky"
                      />
                    </div>
                    <div className="flex flex-col w-full relative">
                      <label
                        className="text-[14px] absolute z-10 -mt-2 pl-1 bg-white pr-1 left-[16px] text-[#4A5454] font-semibold"
                        htmlFor="name"
                      >
                        last Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        className="py-4 pl-[17px] placeholder-[#A0A0A0] placeholder-[12px] text-[12px] border border-[#D9D9D9] rounded-lg outline-none"
                        required
                        type="text"
                        placeholder="StaffCheckr"
                      />
                    </div>
                    <div className=""></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-between s">
                    <div className="flex flex-col w-full relative  ">
                      <label
                        className="text-[14px] absolute z-10 -mt-2 pl-1 bg-white pr-1 left-[16px]  font-semibold text-[#4A5454]"
                        htmlFor="name"
                      >
                        Email <span className="text-red-700">*</span>
                      </label>
                      <input
                        className="py-4 pl-[17px] placeholder-[#A0A0A0] placeholder-[12px] text-[12px] border border-[#D9D9D9] rounded-lg outline-none"
                        required
                        type="text"
                        placeholder="hellomail@.com"
                      />
                    </div>
                    <div className="flex flex-col w-full relative">
                      <label
                        className="text-[14px] absolute z-10 -mt-2 pl-1 bg-white pr-1 left-[16px] text-[#4A5454] font-semibold"
                        htmlFor="name"
                      >
                        Phone <span className="text-red-700">*</span>
                      </label>
                      <input
                        className="py-4 pl-[17px] placeholder-[#A0A0A0] placeholder-[12px] text-[12px] border border-[#D9D9D9] rounded-lg outline-none"
                        required
                        type="text"
                        placeholder="+88"
                      />
                    </div>
                    <div className=""></div>
                  </div>

                  <div className="flex flex-col w-full relative mb-[28px] ">
                    <label
                      className="text-[14px] absolute z-10 -mt-2 pl-1 bg-white pr-1 left-[16px] font-semibold text-[#4A5454]"
                      htmlFor="name"
                    >
                      Subject <span className="text-red-700">*</span>
                    </label>
                    <input
                      className="py-4 pl-[17px] placeholder-[#A0A0A0] placeholder-[12px] text-[12px] border border-[#D9D9D9] rounded-lg outline-none"
                      required
                      type="text"
                      placeholder="subject"
                    />
                  </div>
                  <div className="flex flex-col w-full relative mb-[36px]">
                    <label
                      className="text-[14px] absolute z-10 -mt-2 pl-1 bg-white pr-1 left-[16px] text-[#4A5454] font-semibold"
                      htmlFor="name"
                    >
                      Message <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      required
                      className="py-4 pl-[17px] placeholder-[#A0A0A0] placeholder-[12px] text-[12px] border border-[#D9D9D9] rounded-lg outline-none min-h-[100px]"
                      placeholder="Tell ua what we can help you with!"
                    ></textarea>
                  </div>
                  <div className="">
                    <button className="py-4 bg-primary text-white font-semibold w-full rounded-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
