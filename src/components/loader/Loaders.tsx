import { ReactNode } from "react";
import { HtmldivType } from "../../types/dom";
import css from "./css/Loader.module.css";

type LoadersProps = HtmldivType & {
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
