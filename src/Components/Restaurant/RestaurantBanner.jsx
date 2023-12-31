// import styles from "../../styles/Restaurant/restaurant.globals.css";

const RestaurantBanner = () => {
  return (
    <div className={`bannerImg relative`}>
      <div className="absolute inset-0 w-full h-full bg-black/30 z-0"></div>
      <div className="z-10 absolute h-full w-full flex flex-col items-center lg:items-start  justify-center">
        <h2 className="font-bold text-3xl lg:text-6xl max-w-4xl text-white text-center mx-auto">
          Transform Your Restaurant & Bar Business with 51 Store POS System
        </h2>
        <h2 className="font-bold text-xl lg:text-2xl mx-auto text-white text-center mt-10 px-5">
          Intuitive and easy to use point of sale to manage restaurants
        </h2>
      </div>
    </div>
  );
};

export default RestaurantBanner;
