import React, { useEffect, useState } from "react";
import data, { tabs } from "./data.js";
import OurWorkCard from "./OurWorkCard";
import { ourWorkAnimation } from "../../utils/animations.js";

function PortfolioShowcase() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterLabel, setFilterLabel] = useState("Show Filters");

  useEffect(() => {
    if (window.innerWidth > 768) {
      ourWorkAnimation();
    }
  });
  const [portfolioData, setPortfolioData] = useState(data);
  const [activeTab, setActiveTab] = useState("All");

  const handleTab = (tab) => {
    setActiveTab(tab);

    if (tab === "All") {
      setPortfolioData(data);
      setFilterVisible(false)
    } else {
      const newData = data.filter((item) => item.tags.includes(tab));
      setPortfolioData(newData);
      setFilterVisible(false)
    }
  };

  function handleFilter() {
    setFilterVisible(!filterVisible);
    filterLabel == "Show More"
      ? setFilterLabel("Hide Filter")
      : setFilterLabel("Show Filter");
  }

  return (
    <section className="protfolio-tabs">
      <div className="container">
        {/* Tabs */}
        <h3 className="filter-label" onClick={handleFilter}>
          {filterLabel}
        </h3>
        <div
          className={`tabs flex justify-start items-center gap-5 max-lg:flex-wrap max-md:flex-col max-md:py-5 max-md:block max-md:w-full max-md:text-center ${
            filterVisible ? "active-filter" : null
          }`}
        >
          {tabs.map((tab, index) => (
            <h3
              key={index}
              className={`cursor-pointer ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTab(tab)}
            >
              {tab}
            </h3>
          ))}
        </div>

        {/* Cards */}
        <div className="portfolio-card-wrapper card_wrapper flex flex-col gap-25 py-20 max-md:py-10 max-sm:gap-7">
          {portfolioData.length != 0 ? (
            portfolioData.map((item, index) => (
              <OurWorkCard key={index} item={item} />
            ))
          ) : (
            <h2 className="text-8xl text-white bold text-center py-40">
              Not Found !!!!
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default PortfolioShowcase;
