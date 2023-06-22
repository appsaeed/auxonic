import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode[] }) {
  return <div className="page-wrapper">{children}</div>;
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <div className="page-titles">
      <div className="row">
        <div className="col-12 col-md-12 align-self-center">
          <h2>{children}</h2>
        </div>
      </div>
    </div>
  );
}
