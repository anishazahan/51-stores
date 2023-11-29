import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/image/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="mx-auto w-full custom-container py-16  md:px-10 md:py-24 ">
        <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {" "}
              Gain real-time inventory insights
            </h1>
            <p className="mb-6 max-w-lg text-sm text-[#636262] md:mb-10 lg:mb-12">
              {" "}
              Turn your smartphone or tablet into a powerful POS. Manage sales,
              inventory and employees with ease; engage customers and increase
              your revenue. Whether you have single or multiple stores, our
              tools help run your business.
            </p>

            <div className="flex items-center">
              <Link
                href="/"
                className="mr-5 flex items-center bg-primary px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8"
              >
                <p className="mr-6 font-bold">Get's Started</p>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-none"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </Link>
              <Link href="/" className="flex font-bold">
                <p className="text-black">See Service</p>
              </Link>
            </div>
            <div className="mb-4 mt-10  pl-4 border-l-2 border-primary">
              <p className="text-sm text-[#636262]">
                Discover the power of real-time product visibility, from precise
                locations to timely arrivals, ensuring seamless operations and
                efficient order fulfillment.
              </p>
            </div>
          </div>

          <Image src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
