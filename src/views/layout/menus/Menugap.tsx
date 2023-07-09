import { Children } from "../../../types/global";

type Props = {
  name: string;
  icon: Children;
};

export default function Menugap({ name, icon, ...rest }: Props) {
  return (
    <li className="nav-small-cap mb-3" {...rest}>
      {icon}
      <span className="hide-menu ml-0.5">{name ? name : "Empty"}</span>
    </li>
  );
}
