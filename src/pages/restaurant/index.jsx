import RootLayout from "@/Components/Layout.js/RootLayout";
import RestaurantHomePage from "@/Components/Restaurant/RestaurantHomePage";
import React from "react";

const Restaurant = () => {
  return (
    <>
      <RestaurantHomePage></RestaurantHomePage>
    </>
  );
};

export default Restaurant;

Restaurant.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
