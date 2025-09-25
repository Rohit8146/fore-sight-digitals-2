import React from "react";
import { Link } from "react-router-dom";

function FooterLink({ item, index }) {
  return (
    <li key={index} className="text-white font-semibold text-lg">
      <a href={item.link} className="underline-hover footerlink">
        {item.name}
      </a>
    </li>
  );
}

export default FooterLink;
