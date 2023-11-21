// pages/features/[slug].js
import React from "react";
import { useRouter } from "next/router";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { featureData } from "@/Components/Feature/featuredData";

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
