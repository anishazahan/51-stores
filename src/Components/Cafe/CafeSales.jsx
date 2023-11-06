import { AiFillCheckCircle } from "react-icons/ai";
import img from "../../assets/image/cafeSales.png";
import Image from "next/image";

const CafeSales = () => {
  return (
    <div>
      <section>
        <div className=" custom-container py-10  md:py-24 lg:py-32">
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
    </div>
  );
};

export default CafeSales;
