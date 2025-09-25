import { NavLink } from "react-router-dom";
function HeaderLink({ item, index }) {
  return (
    <li key={index} className="text-white font-semibold text-lg">
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          `${isActive ? "active" : ""} underline-hover`
        }
      >
        {item.name}
      </NavLink>
    </li>
  );
}

export default HeaderLink;
