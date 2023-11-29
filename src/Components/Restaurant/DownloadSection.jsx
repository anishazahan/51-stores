import Image from "next/image";
import img1 from "../../assets/image/appstore-en.png";
import img2 from "../../assets/image/gplay-en.png";
import Link from "next/link";

const DownloadSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className=" flex flex-col justify-center custom-container ">
        <h2 className="font-bold text-3xl text-center mx-auto">
          Point of Sale Software for Restaurant
        </h2>
        <p className="max-w-lg text-sm text-center mt-5 text-lightGray font-medium mx-auto">
          Impress your visitors with a high-end way of taking orders, send them
          to the kitchen instantly on display or tickets. Manage your orders and
          receive payments.
        </p>
        <p className="max-w-lg text-sm text-center mt-8 text-lightGray font-medium mx-auto">
          Focus on creating a unique restaurant atmosphere by letting our POS
          system do all the job: order management, inventory management,
          employee management, visual sales analytics, customers loyalty
          program, and a lot more.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10">
          <Image src={img1} alt="" />
          <Image src={img2} alt="" />
        </div>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="px-8 hover:opacity-90 py-4  rounded-md text-white font-semibold tracking-wider bg-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
