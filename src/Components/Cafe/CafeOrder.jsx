import { RiCreativeCommonsNdFill } from "react-icons/ri";
import img from "../../assets/image/inventory-history.png";
import Image from "next/image";
import { SiBeats } from "react-icons/si";

const CafeOrder = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="custom-container flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-[50%]">
          <div className="flex mx-auto mb-7">
            <button className="text-4xl text-white p-6 bg-primary rounded-full ">
              <SiBeats></SiBeats>
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-7">
            Immediately send orders to the kitchen
          </h2>
          <div className=" flex flex-col gap-5">
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                Get orders to the kitchen faster and with fewer errors by using
                kitchen displays or printers.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                Items, quantities, modifiers, item and ticket comments will all
                appear on the kitchen orders with display or printer.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                Create as many kitchen stations as you need.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-xl text-green-600">
                <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
              </button>
              <p className="text-sm text-lightGray">
                Get orders to the kitchen faster and with fewer errors by using
                kitchen displays or printers.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex justify-start lg:justify-end  ">
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CafeOrder;
