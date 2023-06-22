import { ReactNode } from "react";
type Custom = {
  className?: string;
  children?: ReactNode;
  rest?: React.LiHTMLAttributes<HTMLLIElement>;
};

type Props = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> &
  Custom;

export default function HeaderList({ className, children, ...rest }: Props) {
  return (
    <li className="nav-item" {...rest}>
      <a className={"nav-link " + className}>{children}</a>
    </li>
  );
}
