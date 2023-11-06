import React from "react";
import RestaurantBanner from "./RestaurantBanner";
import DownloadSection from "./DownloadSection";
import OrderManagement from "./OrderManagement";

import DownLoad from "./DownLoad";
import Pairy from "./Pairy";
import Organize from "./Organize";

const RestaurantHomePage = () => {
  return (
    <div>
      <RestaurantBanner></RestaurantBanner>
      <DownloadSection></DownloadSection>
      <OrderManagement></OrderManagement>
      <Organize></Organize>
      {/* <OrderManage></OrderManage> */}
      <Pairy></Pairy>
      <DownLoad></DownLoad>
    </div>
  );
};

export default RestaurantHomePage;
