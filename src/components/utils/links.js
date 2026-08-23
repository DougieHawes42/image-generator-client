import { Link } from "react-router-dom";

// styles
import "./style.scss";

export const NavLink = ({ to, text }) => {
  return (
    <Link to={to} className="nav-link">
      {text}
    </Link>
  );
};
