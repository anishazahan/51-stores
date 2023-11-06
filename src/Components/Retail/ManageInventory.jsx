import { RiCreativeCommonsNdFill } from "react-icons/ri";
import img from "../../assets/image/inventory-history.png";
import Image from "next/image";
import { SiBeats } from "react-icons/si";

const ManageInventory = () => {
  return (
    <div className="custom-container flex flex-col lg:flex-row justify-between items-center py-16 gap-y-10 lg:gap-x-16">
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
  );
};

export default ManageInventory;
