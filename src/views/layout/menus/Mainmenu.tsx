import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  icon: ReactNode;
  url: string | undefined;
  children?: ReactNode;
  rest?: React.LiHTMLAttributes<HTMLLIElement>;
};

export default function Mainmenu({
  name,
  icon,
  url,
  children,
  ...rest
}: Props) {
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
        <li {...rest} className={"sidebar-item"}>
          <Link
            className="sidebar-link waves-effect waves-dark sidebar-item-link"
            to={url || "#"}
          >
            {icon} <span className="hide-menu ml-0.5">{name} </span>
          </Link>
        </li>
      )}
    </>
  );
}
