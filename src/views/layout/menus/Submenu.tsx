import { Link } from "react-router-dom";
import { Children } from "../../../types/global";

type Props = {
  name: string;
  icon: Children;
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
