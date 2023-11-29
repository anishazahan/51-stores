import { RiCreativeCommonsNdFill } from "react-icons/ri";
import img from "../../assets/image/inventory-history.png";
import img3 from "../../assets/image/sales.png";
import img4 from "../../assets/image/cds.png";

import { SiBeats } from "react-icons/si";

import Image from "next/image";
import { FaBagShopping } from "react-icons/fa6";
import img2 from "../../assets/image/customer.png";
import { IoListCircle } from "react-icons/io5";
import Link from "next/link";

const ManageInventory = () => {
  return (
    <>
      <div className="custom-container flex flex-col lg:flex-row justify-between items-center pb-16 gap-y-10 lg:gap-x-16">
        <div className="w-full lg:w-[50%] flex justify-start lg:justify-end  ">
          <Image src={img} alt="" />
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="flex mx-auto mb-7">
            <button className="text-4xl text-white p-6 bg-primary rounded-full ">
              <SiBeats></SiBeats>
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-7">
            Manage Inventory In Retail Stores
          </h2>
          <div className=" flex flex-col gap-5">
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                Quickly fill up your stock with goods using purchase orders.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                Transfer goods between your sales venues using transfer orders.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                Keep your stock always accurate by performing counting and stock
                correction in the Advanced Inventory System.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                View report on the cost and potential profit of your inventory.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-16 pb-6 mb-10">
        <div className="custom-container flex flex-col lg:flex-row justify-between items-start pb-16 gap-y-10 lg:gap-x-16">
          <div className="w-full lg:w-[50%]">
            <div className="flex mx-auto mb-7">
              <button className="text-4xl text-white p-6 bg-primary rounded-full ">
                <FaBagShopping />
              </button>
            </div>
            <h2 className="text-3xl font-bold mb-7">
              Make sales process comfortable
            </h2>
            <div className=" flex flex-col gap-5">
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Print barcodes for your goods and add the items to the ticket
                  with just a click by using a barcode scanner or built-in
                  device camera.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Use item variants for goods with multiple versions, like
                  different sizes or colors.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Apply discounts and taxes, and make notes to the items or to
                  the receipts.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Create and use different payment types, such as cash, card,
                  cheque, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex justify-start lg:justify-end  ">
            <Image src={img3} alt="" />
          </div>
        </div>
      </div>
      {/* ............ 2nd section........ */}

      <div>
        <section>
          <div class="custom-container mb-10">
            <div class="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between">
              <Image alt="" src={img2} />
              <ul class="flex flex-col lg:justify-start lg:items-center w-full lg:w-[50%]">
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
                      Manage employee access to sensitive information and
                      functions.
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
                <li>
                  <Link
                    class="my-4 flex max-w-sm rounded-md px-4 py-2 hover:border border-solid border-primary duration-300"
                    tabindex="-1"
                    href="#w-tabs-0-data-w-pane-2"
                  >
                    <p class="ml-4 text-sm text-[#636262]">
                      Employees can clock in/out, and the system calculates
                      their total hours.
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-gray-50">
          <div class="custom-container py-16 md:px-10 md:py-24 ">
            <div class="flex flex-col-reverse gap-8 sm:gap-20 lg:grid lg:grid-cols-2">
              <div>
                <Image src={img4} />
              </div>

              <div class="flex flex-col items-start lg:justify-center">
                <h2 class="mb-4 text-2xl font-bold md:text-4xl">
                  Make your customers feel comfortable in your store
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
                      Display purchase information to your customers on a
                      customer facing display simultaneously during the sale
                      process.
                    </p>
                  </li>
                  <li class="mb-2 flex items-start  space-x-2">
                    <button className="text-primary text-2xl">
                      <IoListCircle />
                    </button>
                    <p>
                      Build a customer base to communicate more effectively with
                      your consumers.
                    </p>
                  </li>
                  <li class="mb-2 flex items-start  space-x-2">
                    <button className="text-primary text-2xl">
                      <IoListCircle />
                    </button>
                    <p>
                      Motivate customers to visit your store again by rewarding
                      them with bonus points using the loyalty program
                    </p>
                  </li>
                  <li class="flex items-start  space-x-2">
                    <button className="text-primary text-2xl">
                      <IoListCircle />
                    </button>
                    <p>
                      Make notes about each buyer's personal preferences and
                      provide the best customer service.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManageInventory;
