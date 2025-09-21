import React from "react";
import { Link } from "react-router-dom";

function FooterLink({ item, index }) {
  return (
    <li key={index} className="text-white font-semibold text-lg">
      <Link to={item.link} className="underline-hover footerlink">
        {item.name}
      </Link>
    </li>
  );
}

export default FooterLink;
