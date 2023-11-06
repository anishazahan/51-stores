import { RiCreativeCommonsNdFill } from "react-icons/ri";
import img from "../../assets/image/inventory-history.png";
import Image from "next/image";
import { SiBeats } from "react-icons/si";

const OrderManagement = () => {
  return (
    <div className="custom-container flex flex-col lg:flex-row justify-between items-center py-10 gap-10">
      <div className="w-full lg:w-[50%]">
        <div className="flex mx-auto mb-7">
          <button className="text-4xl text-white p-6 bg-primary rounded-full ">
            <SiBeats></SiBeats>
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-7">Smooth order management</h2>
        <div className=" flex flex-col gap-5">
          <div className="flex items-center space-x-2">
            <button className="text-xl text-green-600">
              <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
            </button>
            <p className="text-sm text-lightGray">
              Quickly and accurately receive many orders with open tickets.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-xl text-green-600">
              <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
            </button>
            <p className="text-sm text-lightGray">
              Manage open tickets by splitting, merging, and moving items
              between tickets.Assign tickets to tables in one click with the
              predefined tickets functionality.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-xl text-green-600">
              <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
            </button>
            <p className="text-sm text-lightGray">
              Manage open tickets by splitting, merging, and moving items
              between tickets.Assign tickets to tables in one click with the
              predefined tickets functionality.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-xl text-green-600">
              <RiCreativeCommonsNdFill></RiCreativeCommonsNdFill>
            </button>
            <p className="text-sm text-lightGray">
              Manage open tickets by splitting, merging, and moving items
              between tickets.Assign tickets to tables in one click with the
              predefined tickets functionality.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] flex justify-start lg:justify-end  ">
        <Image src={img} alt="" />
      </div>
    </div>
  );
};

export default OrderManagement;
