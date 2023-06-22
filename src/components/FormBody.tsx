import { ReactNode } from "react";
import { Link } from "react-router-dom";
import settings from "../app/settings";

//form body props
type FromType = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;
type Props = FromType & {
  title?: string;
  sub_title?: string;
  redirect?: string;
  toText?: string;
  children?: ReactNode;
  prgs?: React.FormHTMLAttributes<HTMLFormElement>;
};
export const FormBody = ({
  title,
  sub_title,
  redirect,
  toText,
  children,
  ...prgs
}: Props) => {
  return (
    <div className="card-body">
      <h2 className="text-center">
        {title || `Welcome back to  ${settings.name}`}
      </h2>
      <p className="text-muted fs-4 text-center">
        {sub_title || "Login or New Here "}{" "}
        <Link to={redirect || "/signup"}>{toText || "Sign Up"}</Link>
      </p>
      <form
        {...prgs}
        className="form-horizontal mt-4 pt-4 needs-validation was-validated"
      >
        {children}
      </form>
    </div>
  );
};
