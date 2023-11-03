import React, { useState } from "react";
import Tab1 from "./Tab1";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("Tab1"); // Initialize with Tab1 as the active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabContent = {
    Tab1: <Tab1></Tab1>,
    Tab2: "Content for Tab 2",
    Tab3: "Content for Tab 3",
    Tab4: "Content for Tab 4",
    Tab5: "Content for Tab 5",
    Tab6: "Content for Tab 6",
  };

  return (
    <div className="max-w-5xl mx-auto px-5 lg:px-0 py-20">
      <h2 className="mt-6 text-center text-3xl font-bold md:text-4xl mb-14">
        What makes Zoho Invent GST Compliant
      </h2>
      <div className="border flex justify-between max-w-4xl mx-auto">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`text-gray-800 flex-justify-center text-center py-6 text-sm uppercase font-bold px-8 custom-shadow ${
              activeTab === tab ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <div className="tab-content">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default MainTab;
