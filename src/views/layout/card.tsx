import { ReactNode } from "react";

export function CardWrapper({
  className = "col-md-12",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <div className="card">{children}</div>
    </div>
  );
}

export function Cardbody({ children }: { children: ReactNode }) {
  return <div className="card-body px-2">{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <div className="border-bottom title-part-padding">{children}</div>;
}
