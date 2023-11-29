import Image from "next/image";
import img1 from "../../assets/image/appstore-en.png";
import img2 from "../../assets/image/gplay-en.png";
import Link from "next/link";

const DownLoad = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="custom-container text-center">
        <h2 className="font-bold text-4xl text-primary mb-6">
          Download Inventory Management App
        </h2>
        <p className="max-w-md mx-auto text-lightGray font-medium mb-8">
          Manage your inventory with ease on any device.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <Image src={img1} alt="App Store" />
          <Image src={img2} alt="Google Play" />
        </div>

        <div className="flex justify-center">
          <Link href="/download" passHref>
            <p className="inline-block px-8 py-4 rounded-md text-white font-semibold tracking-wider bg-primary hover:bg-primary-dark">
              Download Now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownLoad;
