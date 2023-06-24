import { ReactNode } from "react";
import { Link } from "react-router-dom";
import settings from "../../../app/settings";

export default function HeaderLogo({ children }: { children?: ReactNode }) {
  return (
    <Link className="navbar-brand" to="/">
      {/* <b className="logo-icon">
        <img
          src={settings.logo || ""}
          alt={settings.name}
          className="dark-logo"
        />
        <img
          src={settings.logo || ""}
          alt={settings.name}
          className="light-logo"
        />
      </b> */}
      <b>
        <img src={settings.logo || ""} alt="homepage" />
      </b>
      <span className="logo-text text-light text-center w-100">
        {settings.name}
      </span>
      {children}
    </Link>
  );
}
