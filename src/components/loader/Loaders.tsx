import { ReactNode } from "react";
import { Htmldiv } from "../../types/htmltypes";
import css from "./css/Loader.module.css";

type LoadersProps = Htmldiv & {
  className?: string;
  children?: ReactNode;
};

export default function Loaders({
  className,
  children,
  ...rest
}: LoadersProps) {
  return (
    <div className={css?.appsaeed_loaders + " " + className} {...rest}>
      {children}
    </div>
  );
}
