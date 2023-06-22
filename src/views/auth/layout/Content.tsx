import { ReactNode } from "react";
export default function Content({ children }: { children: ReactNode }) {
  return (
    <div className="row auth-wrapper gx-0">
      <div
        className="col-12  d-flex
            align-items-center
            justify-content-center
          "
      >
        <div className="row justify-content-center w-100 mt-4 mt-lg-0">
          <div className="col-4 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
