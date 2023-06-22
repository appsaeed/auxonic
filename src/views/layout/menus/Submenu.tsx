import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  icon: ReactNode;
  url: string;
};

export default function Submenu({ name, icon, url }: Props) {
  return (
    <li className={"sidebar-item "}>
      <Link
        className="sidebar-link waves-effect waves-dark sidebar-item-link"
        to={url}
        aria-expanded="true"
      >
        {icon}
        <span className="hide-menu ml-0.5">{name}</span>
      </Link>
    </li>
  );
}
