import CafeBanner from "@/Components/Cafe/CafeBanner";
import CafeDownload from "@/Components/Cafe/CafeDownload";
import CafeDownload2 from "@/Components/Cafe/CafeDownload2";
import CafeOrder from "@/Components/Cafe/CafeOrder";
import CafeOrganize from "@/Components/Cafe/CafeOrganize";
import CafeSales from "@/Components/Cafe/CafeSales";
import React from "react";

const Cafe = () => {
  return (
    <>
      <CafeBanner></CafeBanner>
      <CafeDownload></CafeDownload>
      <CafeOrganize></CafeOrganize>
      <CafeOrder></CafeOrder>
      <CafeSales></CafeSales>
      <CafeDownload2></CafeDownload2>
    </>
  );
};

export default Cafe;
