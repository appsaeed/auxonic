import { ReactNode } from "react";
export default function Content({ children }: { children: ReactNode }) {
  return (
    <div className="row justify-content-center vh-100">
      <div className="col-md-4 align-self-center">
        <div className="card">
          <div className="card-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
