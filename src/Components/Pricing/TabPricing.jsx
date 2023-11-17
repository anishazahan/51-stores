import React, { useState } from "react";
import MonthlyPricing from "./MonthlyPricing";
import YearlyPricing from "./YearlyPricing";

const TabPricing = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center bg-[#E9F5F5] px-4 py-2 rounded-full mb-[48px]">
          <button
            onClick={() => handlePeriodChange("monthly")}
            className={`px-4 py-2 font-semibold rounded-full ${
              selectedPeriod === "monthly"
                ? "text-white bg-primary"
                : "text-primary"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handlePeriodChange("yearly")}
            className={`px-4 py-2 font-semibold rounded-full ${
              selectedPeriod === "yearly"
                ? "text-white bg-primary"
                : "text-primary"
            }`}
          >
            Yearly (Save 25%)
          </button>
        </div>
      </div>

      <div>
        {selectedPeriod === "monthly" && <MonthlyPricing />}
        {selectedPeriod === "yearly" && <YearlyPricing />}
      </div>
    </div>
  );
};

export default TabPricing;
