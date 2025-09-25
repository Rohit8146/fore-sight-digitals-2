import React from "react";
import { Link } from "react-router-dom";

function Button({ link, label }) {
  return (
    <div className="gradiant_border button">
      <a href={link} className="btn">
        {label}
      </a>
    </div>
  );
}

export default Button;
