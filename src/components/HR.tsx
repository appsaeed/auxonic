// eslint-disable-next-line react-refresh/only-export-components
export default function HR({ text = "or connect with more" }) {
  return (
    <>
      <hr />
      <div className="text-center">{text}</div>
      <hr />
    </>
  );
}
