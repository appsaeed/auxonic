import { InputType } from "../types/dom";

//input fields props attributes types
type InputCustomType = {
  error?: string;
  label: string;
  refs?: unknown;
  rest?: {
    [x: string]: React.InputHTMLAttributes<HTMLInputElement>;
  };
};

type Props = InputType & InputCustomType;

//make customer input component
export default function Input({ label, error, ...rest }: Props) {
  return (
    <div className="form-floating mb-3">
      <input
        placeholder={label}
        className="form-control form-input-bg"
        {...rest}
      />
      <label>{label || "label"}</label>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
