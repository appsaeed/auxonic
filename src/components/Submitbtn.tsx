type Props = {
  className?: string;
  [x: string]: any;
};

export default function SubmitBtn({ className, ...rest }: Props) {
  return (
    <div className={className || "d-flex justify-content-center my-4"}>
      <button {...rest} type="submit" className="btn btn-primary px-4 w-50">
        Sign in
      </button>
    </div>
  );
}
