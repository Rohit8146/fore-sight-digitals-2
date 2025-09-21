import React from "react";
import StyledHeading from "./../ui/StyledHeading";
import headingImage from "../assets/images/Portfolio.png";
import PortfolioShowcase from "../components/OurWorks/PortfolioShowcase";

function Portfolio() {
  return (
    <main className="portfolio_Page">
      <StyledHeading image={headingImage} heading="OUR" />
      <PortfolioShowcase />
    </main>
  );
}

export default Portfolio;
