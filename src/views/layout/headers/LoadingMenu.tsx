import { Link } from "react-router-dom";

export default function LoadingMenu() {
  return (
    <li className="nav-item dropdown profile-dropdown">
      <Link
        to={"/login"}
        className="nav-link dropdown-toggle d-flex align-items-center"
      >
        <i className="ri ri-loader-4-line fs-8 anm-spin anm-d-0.4"></i>
      </Link>
    </li>
  );
}
