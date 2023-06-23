import { ReactNode } from "react";
import { Link } from "react-router-dom";
import settings from "../../../app/settings";
import { usePreference } from "../../../context/PreferenceContext";

export default function HeaderLogo({ children }: { children?: ReactNode }) {
  const preference = usePreference();
  const iconName =
    preference.sidebarType === "full" ? (
      settings.name
    ) : (
      <img src={settings.logo || ""} alt="homepage" className="light-logo" />
    );

  return (
    <Link className="navbar-brand" to="/">
      <b className="logo-icon">
        {/* <img
          src={settings.logo || ""}
          alt={settings.name}
          className="dark-logo"
        /> */}
        {/* <img
          src={settings.logo || ""}
          alt={settings.name}
          className="light-logo"
        /> */}
      </b>
      <span className="logo-text">
        <img src={settings.logo || ""} alt="homepage" className="dark-logo" />
        <img src={settings.logo || ""} alt="homepage" className="light-logo" />
      </span>
      <div className="text-light text-center w-100"> {iconName}</div>
      {children}
    </Link>
  );
}
