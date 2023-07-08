import { Link, useLocation } from "react-router-dom";
import { Children } from "../../../types/global";

type Props = {
  name: string;
  icon: Children;
  url: string | undefined;
  children?: Children;
};

export default function Mainmenu({
  name,
  icon,
  url,
  children,
  ...rest
}: Props) {
  const pathname = useLocation()
    .pathname.toString()
    .toString()
    .replace(/\//g, "");
  const urlpath = url?.toString().toLowerCase().replace(/\//g, "");
  const active = pathname === urlpath ? " active " : "";
  const selected = pathname === urlpath ? " selected " : "";
  return (
    <>
      {children ? (
        <li {...rest} className={"sidebar-item"}>
          <span className={"sidebar-link waves-effect waves-dark  has-arrow"}>
            {icon}
            <span className="hide-menu ml-0.5">{name}</span>
          </span>
          <ul className={"collapse first-level"}>{children}</ul>
        </li>
      ) : (
        <li {...rest} className={`sidebar-item ${selected}`}>
          <Link
            className={`sidebar-link waves-effect waves-dark sidebar-item-link ${active}`}
            to={url || "#"}
          >
            {icon} <span className="hide-menu ml-0.5">{name} </span>
          </Link>
        </li>
      )}
    </>
  );
}
