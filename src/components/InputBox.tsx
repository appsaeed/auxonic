import { AppInputType } from "../app/types/input";

type InputCustomType = {
  label?: string | undefined;
  labelClass?: string;
  classes?: string;
  inputClass?: string;
  refs?: unknown;
  rest?: {
    [x: string]: React.InputHTMLAttributes<HTMLInputElement>;
  };
};

type Props = AppInputType & InputCustomType;
export default function Inputbox({
  label = undefined,
  labelClass = "",
  classes = "",
  inputClass = "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  refs = null,
  ...rest
}: Props) {
  return (
    <div className={"input-box " + classes}>
      {label && (
        <label className={"fs-12 font-weight-bold text-md-right " + labelClass}>
          {label}
        </label>
      )}
      <input
        {...rest}
        className={`form-control   ${inputClass}`}
        placeholder={label}
      />
    </div>
  );
}
