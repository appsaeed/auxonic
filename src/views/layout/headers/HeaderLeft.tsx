import * as Fa from "react-feather";

export default function HeaderLeft() {
  const setSidebarType = () => {
    //
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
