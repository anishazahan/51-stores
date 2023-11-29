import Image from "next/image";
import img from "../../assets/image/timecard.png";
import img2 from "../../assets/image/customer.png";
import { IoListCircle } from "react-icons/io5";
import Link from "next/link";

const Pairy = () => {
  return (
    <div>
      <section>
        <div class="custom-container mb-10">
          <div class="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between">
            <ul class="flex flex-col justify-center w-full lg:w-[50%]">
              <h2 class="mb-4 text-2xl font-bold md:text-4xl">
                Manage your employees
              </h2>
              <li>
                <Link
                  class="my-4 flex max-w-sm rounded-md border border-solid border-primary px-4 py-2"
                  href="#w-tabs-0-data-w-pane-0"
                >
                  <p class="ml-4 text-sm text-[#636262]">
                    Track each employee’s sales performance and make informed
                    business decisions.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  class="my-4 flex max-w-sm rounded-md px-4 py-2 hover:border border-solid border-primary duration-300"
                  tabindex="-1"
                  href="#w-tabs-0-data-w-pane-1"
                >
                  <p class="ml-4 text-sm text-[#636262]">
                    Information on the workload per hour allows for efficient
                    management of your staff.
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  class="my-4 flex max-w-sm rounded-md px-4 py-2 hover:border border-solid border-primary duration-300"
                  tabindex="-1"
                  href="#w-tabs-0-data-w-pane-2"
                >
                  <p class="ml-4 text-sm text-[#636262]">
                    Identify any cash discrepancy at the end of the shift and
                    track employees’ inaccuracy or manipulations.
                  </p>
                </Link>
              </li>
            </ul>

            <Image alt="" src={img2} />
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div class="custom-container py-16 md:px-10 md:py-24 ">
          <div class="flex flex-col-reverse gap-8 sm:gap-20 lg:grid lg:grid-cols-2">
            <div>
              <Image src={img} />
            </div>

            <div class="flex flex-col items-start lg:justify-center">
              <h2 class="mb-4 text-2xl font-bold md:text-4xl">
                Make your customers feel comfortable in your restaurant
              </h2>
              <div class="max-w-[480px]">
                <p class="text-[#647084]">
                  Information on the workload per hour allows for efficient
                  management of your staff.
                </p>
              </div>

              <div class="my-5 h-0 w-40 border border-primary [border-top-style:solid]"></div>

              <ul class="flex flex-col items-start space-y-2">
                <li class="mb-2 flex items-start  space-x-2">
                  <button className="text-primary text-2xl">
                    <IoListCircle />
                  </button>
                  <p>
                    Motivate customers to visit your restaurant again by
                    rewarding them with bonus points using the loyalty program.
                  </p>
                </li>
                <li class="mb-2 flex items-start  space-x-2">
                  <button className="text-primary text-2xl">
                    <IoListCircle />
                  </button>
                  <p>Create a pool of constant visitors of your restaurant.</p>
                </li>
                <li class="mb-2 flex items-start  space-x-2">
                  <button className="text-primary text-2xl">
                    <IoListCircle />
                  </button>
                  <p>
                    Make notes about customers to remember each client's
                    personal preferences and to provide the best service.
                  </p>
                </li>
                <li class="flex items-start  space-x-2">
                  <button className="text-primary text-2xl">
                    <IoListCircle />
                  </button>
                  <p>
                    Create as many kitchen stations as you need by using kitchen
                    displays or printers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pairy;
