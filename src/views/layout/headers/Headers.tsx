import { usePreference } from "../../../api/context/PreferenceContext";
import HeaderLeft from "./HeaderLeft";
import HeaderLogo from "./HeaderLogo";
import HeaderRight from "./HeaderRight";

export default function Headers() {
  const preference = usePreference();
  const navTaggle = () => {
    const theme = preference.theme === "dark" ? "dark" : "light";
    preference.switchTheme(theme);
  };
  return (
    <>
      <header className="topbar" data-navbarbg={preference.themeSkin}>
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          <div className="navbar-header" data-logobg={preference.themeSkin}>
            <a
              onClick={navTaggle}
              className="nav-toggler waves-effect waves-light d-block d-md-none"
            >
              <i className="ri-close-line ri-menu-2-line fs-6"></i>
            </a>

            <HeaderLogo />

            <a
              className="topbartoggler d-block d-md-none waves-effect waves-light"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ri-more-line fs-6"></i>
            </a>
          </div>
          <div
            className="navbar-collapse collapse"
            id="navbarSupportedContent"
            data-navbarbg={preference.themeSkin}
          >
            <HeaderLeft />
            <HeaderRight />
          </div>
        </nav>
      </header>
    </>
  );
}
