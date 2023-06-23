type Props = {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

export default function SubmitBtn({ className, ...rest }: Props) {
  return (
    <div className={className || "justify-content-center my-4"}>
      <button {...rest} type="submit" className="btn btn-primary px-4 w-50">
        Sign in
      </button>
    </div>
  );
}
