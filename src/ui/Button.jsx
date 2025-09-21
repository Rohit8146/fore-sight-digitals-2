import React from "react";
import { Link } from "react-router-dom";

function Button({ link, label }) {
  return (
    <div className="gradiant_border button">
      <Link href={link} className="btn">
        {label}
      </Link>
    </div>
  );
}

export default Button;
