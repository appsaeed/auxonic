import { ReactNode } from "react";

type Props = {
  name: string;
  icon: ReactNode;
  rest?: React.LiHTMLAttributes<HTMLLIElement>;
};

export default function Menugap({ name, icon, ...rest }: Props) {
  return (
    <li className="nav-small-cap mb-3" {...rest}>
      {icon}
      <span className="hide-menu ml-0.5">{name ? name : "Empty"}</span>
    </li>
  );
}
