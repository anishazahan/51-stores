import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("Track Inventory"); // Initialize with Tab1 as the active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabContent = {
    "Track Inventory": <Tab1></Tab1>,
    "Scan Barcodes": <Tab2 />,
    "Manage Orders": <Tab3 />,
    "User Security": <Tab4 />,
    "Analytics & Reports": <Tab5 />,
  };

  return (
    <div className="max-w-5xl mx-auto px-5 lg:px-0 py-20">
      <h2 className="mt-6 text-center text-3xl font-bold md:text-4xl mb-14">
        What makes Zoho Invent GST Compliant
      </h2>
      <div className="border flex flex-wrap flex-row justify-center lg:justify-between max-w-4xl mx-auto">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`text-gray-800 flex-justify-center text-center py-6 text-sm uppercase font-bold px-5 custom-shadow ${
              activeTab === tab ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto mt-4 ">
        <div className="tab-content">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default MainTab;
