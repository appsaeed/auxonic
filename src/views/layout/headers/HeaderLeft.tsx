import * as Fa from "react-feather";
import { usePreference } from "../../../context/PreferenceContext";

export default function HeaderLeft() {
  const preference = usePreference();
  const setSidebarType = () => {
    if (preference.sidebarType === "full") {
      preference.setSidebarType("mini-sidebar");
    } else {
      preference.setSidebarType("full");
    }
  };

  return (
    <>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a
            className="nav-link sidebartoggler d-none d-md-block"
            onClick={setSidebarType}
            style={{ cursor: "pointer" }}
          >
            <Fa.Menu />
          </a>
        </li>
      </ul>
    </>
  );
}
