import FAQ from "@/Components/FAQ/FAQ";
import OptionalPricing from "@/Components/Pricing/OptionalPricing";
import PricingBanner from "@/Components/Pricing/PricingBanner";
import SimplePricing from "@/Components/Pricing/SimplePricing";
import TabPricing from "@/Components/Pricing/TabPricing";
import React from "react";

const Pricing = () => {
  return (
    <>
      <PricingBanner />
      <SimplePricing />
      <TabPricing />
      <OptionalPricing />
      <FAQ />
    </>
  );
};

export default Pricing;
