import { Children } from "../../types/global";

export function CardWrapper({
  className = "col-md-12",
  children,
}: {
  className?: string;
  children: Children;
}) {
  return (
    <div className={className}>
      <div className="card">{children}</div>
    </div>
  );
}

export function Cardbody({ children }: { children: Children }) {
  return <div className="card-body px-2">{children}</div>;
}

export function CardTitle({ children }: { children: Children }) {
  return <div className="border-bottom title-part-padding">{children}</div>;
}
