import { AiFillCheckCircle } from "react-icons/ai";
import { RiCreativeCommonsNdFill } from "react-icons/ri";
import img from "../../assets/image/cafeSales.png";
import img2 from "../../assets/image/customer.png";
import Image from "next/image";
import { SiBeats } from "react-icons/si";
const CafeSales = () => {
  return (
    <div className="">
      <section>
        <div className=" custom-container py-10  md:py-24 ">
          <div className="flex flex-col-reverse gap-8 sm:gap-20 lg:grid lg:grid-cols-2">
            <div>
              <Image
                src={img}
                alt=""
                className="inline-block h-full w-full max-w-[640px]"
              />
            </div>

            <div className="flex flex-col items-start lg:justify-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Scale your business café or coffee shop
              </h2>
              <div className="max-w-[480px]">
                <p className="text-[#647084]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus
                </p>
              </div>

              <div className="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]"></div>

              <ul className="flex flex-col items-start space-y-5">
                <li className="mb-2 flex items-center space-x-2">
                  <button className="text-xl text-green-600">
                    <AiFillCheckCircle></AiFillCheckCircle>
                  </button>
                  <p>
                    Manage multiple cafes or coffee shop chains under one
                    account.
                  </p>
                </li>
                <li className="mb-2 flex items-center space-x-2">
                  <button className="text-xl text-green-600">
                    <AiFillCheckCircle></AiFillCheckCircle>
                  </button>
                  <p>
                    Track your sales, inventory, employees, and customers —
                    everything you need to know in one place.
                  </p>
                </li>
                <li className="mb-2 flex items-center space-x-2">
                  <button className="text-xl text-green-600">
                    <AiFillCheckCircle></AiFillCheckCircle>
                  </button>
                  <p>
                    Track the sales growth or decline compared with the previous
                    day, week, or month, and promptly react to changes.
                  </p>
                </li>
                <li className="flex items-center space-x-2">
                  <button className="text-xl text-green-600">
                    <AiFillCheckCircle></AiFillCheckCircle>
                  </button>
                  <p>
                    Sales by item analytics allow the best-selling items to be
                    determined and therefore, the right purchasing decisions can
                    be made.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <div className="custom-container flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-[50%]">
            <div className="flex mx-auto mb-7">
              <button className="text-4xl text-white p-6 bg-primary rounded-full ">
                <SiBeats></SiBeats>
              </button>
            </div>
            <h2 className="text-3xl font-bold mb-7">
              Make your customers come back
            </h2>
            <div className=" flex flex-col gap-5">
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Give your customers full control on their orders through
                  digital display showing the sale process.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Motivate customers to visit your cafe again by rewarding them
                  with bonus points with the loyalty program.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Build personal engagement with your customers and turn them
                  into constant visitors of your coffee shop by rewarding each
                  purchases.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-xl text-green-600">
                  <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
                </button>
                <p className="text-sm text-lightGray">
                  Remember each client's personal preferences by making notes in
                  the system.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-start lg:justify-end  ">
            <Image src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeSales;
