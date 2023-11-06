import Image from "next/image";
import img1 from "../../assets/image/appstore-en.png";
import img2 from "../../assets/image/gplay-en.png";
import Link from "next/link";

const DownLoad = () => {
  return (
    <div className="py-20 flex flex-col justify-center custom-container">
      <h2 className="font-bold text-3xl text-center mx-auto">
        Download 51Store POS Now!
      </h2>
      <p className="max-w-lg  text-center mt-5 text-lightGray font-medium mx-auto">
        For iPhone, iPad, Android smartphone or tablet
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
  );
};

export default DownLoad;
