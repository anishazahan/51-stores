import ManageInventory from "@/Components/Retail/ManageInventory";
import RetailBanner from "@/Components/Retail/RetailBanner";
import RetailDownload from "@/Components/Retail/RetailDownload";
import RetailDownload2 from "@/Components/Retail/RetailDownload2";
import RetailSales from "@/Components/Retail/RetailSales";
import React from "react";

const Retail = () => {
  return (
    <>
      <RetailBanner></RetailBanner>
      <RetailDownload></RetailDownload>
      <RetailSales></RetailSales>
      <ManageInventory></ManageInventory>
      <RetailDownload2></RetailDownload2>
    </>
  );
};

export default Retail;
