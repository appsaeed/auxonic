import { HtmlLitype } from "../../../types/dom";
import { Children } from "../../../types/global";

interface Props extends HtmlLitype {
  className?: string;
  children?: Children;
}
export default function HeaderList({
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <li className="nav-item" {...rest}>
      <a className={"nav-link " + className}>{children}</a>
    </li>
  );
}
