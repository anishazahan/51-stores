// pages/features/[slug].js
import React from "react";
import { useRouter } from "next/router";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { featureData } from "@/Components/Feature/featuredData";
import Link from "next/link";
import img from "../../assets/image/Analytics.png";
import img2 from "../../assets/image/Sales-reports.png";
import img3 from "../../assets/image/dashboard.png";
import img4 from "../../assets/image/Purchase-reports.png";
import img5 from "../../assets/image/FIFO.png";
import img6 from "../../assets/image/Exportable-reports.png";
import Image from "next/image";

const FeatureDetail = ({ feature }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div className="custom-container py-20">
      <div className="inline-block">
        {feature.icon === "MdOutlineSettingsInputAntenna" && (
          <button className="text-xl p-3 bg-primary text-white inline">
            <MdOutlineSettingsInputAntenna />
          </button>
        )}
      </div>
      <p className="text-xl font-bold mt-5">{feature.title}</p>
      <p className="text-sm text-[#636262] mt-5 mb-5">{feature.description}</p>

      <p className="text-xl my-5 font-bold">Main objectives</p>

      <ul className="list-disc pl-5">
        {feature.details.map((detail, index) => (
          <li key={index} className="py-1 text-gray-800 font-medium">
            {detail}
          </li>
        ))}
      </ul>

      <div className=" mt-16 lg:pb-20">
        <p className="text-xl  md:text-3xl text-center lg:text-4xl my-5 font-bold">
          Inventory reports for smart decisions
        </p>
        <p className="max-w-xl mx-auto mb-10 text-center">
          Analyze different reports to study the sales trend, best performing
          item and even more with simple yet accurate inventory reporting
          options.
        </p>
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-block items-center bg-secondary px-6 py-3 text-center font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
        <Image className="mx-auto mt-20" src={img} alt="" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between max-w-5xl mx-auto items-start lg:gap-10 my-20">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl font-bold text-secondary mb-5">
            Intuitive dashboard.
          </h2>
          <p className="max-w-md mb-10">
            Get instant visibility into your business at a glance. Get details
            about unresolved tasks, important notifications, and the overall
            health of your business.
          </p>
        </div>
        <Image className="w-full lg:w-[50%]" src={img3} alt="" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between max-w-5xl mx-auto items-start gap-10 my-16 lg:my-32">
        <Image className="w-full lg:w-[50%]" src={img2} alt="" />
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl font-bold text-secondary mb-5">
            Sales reports.
          </h2>
          <p className="max-w-md mb-10">
            Know your best selling products with the sales reports. Also, get
            details about your best customers and their payment history.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between max-w-5xl mx-auto items-start lg:gap-10 lg:my-32">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl font-bold text-secondary mt-10 lg:mt-0 mb-5">
            Purchase reports.
          </h2>
          <p className="max-w-md mb-10">
            Get notified when items run low on stock and need to be re-stocked.
            Know when items will be received and details about outstanding
            payments.
          </p>
        </div>
        <Image className="w-full lg:w-[50%]" src={img4} alt="" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between max-w-5xl mx-auto items-center gap-10 lg:my-40 ">
        <Image className="w-full lg:w-[50%]" src={img5} alt="" />
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl font-bold text-secondary mb-5">
            FIFO tracking.
          </h2>
          <p className="max-w-md mb-10">
            51 store Inventory uses the FIFO method to valuate the stock. Each
            and every item in your inventory is accounted for, whether it is
            coming in or going out.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between max-w-5xl mx-auto items-start gap-10 lg:mt-44">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl font-bold text-secondary mb-5">
            Exportable Reports.
          </h2>
          <p className="max-w-md mb-10">
            Export your reports to CSV, XLS or PDF files at a click.
          </p>
        </div>
        <Image className="w-full lg:w-[50%]" src={img5} alt="" />
      </div>
    </div>
  );
};

export default FeatureDetail;

export async function getStaticPaths() {
  const paths = featureData.map((item) => ({
    params: { slug: encodeURIComponent(item.title.toLowerCase()) },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const feature = featureData.find(
    (item) => encodeURIComponent(item.title.toLowerCase()) === params.slug
  );

  const iconIdentifier = "MdOutlineSettingsInputAntenna";
  const serializedFeature = { ...feature, icon: iconIdentifier };

  return {
    props: {
      feature: serializedFeature,
    },
  };
}
