import { Link } from "react-router-dom";
import * as Fa from "react-feather";

export default function GuestMenu() {
  return (
    <li className="nav-item dropdown profile-dropdown">
      <Link
        to={"/login"}
        className="nav-link dropdown-toggle d-flex align-items-center"
      >
        <span className="btn btn-light-primary text-info btn-circle">
          <Fa.User />
        </span>
      </Link>
    </li>
  );
}
