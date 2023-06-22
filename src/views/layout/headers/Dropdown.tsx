import { ReactNode } from "react";

type Props = {
  title: string;
  count: number;
  icon: ReactNode;
  children: ReactNode;
};
export default function Dropdown({ title, count, icon, children }: Props) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {icon ? icon : <i data-feather={"image"}></i>}
        <div className="notify">
          <span className="point bg-success" />
        </div>
      </a>
      <div
        className="dropdown-menu mailbox dropdown-menu-end dropdown-menu-animate-up"
        aria-labelledby={"2"}
      >
        <ul className="list-style-none">
          <li>
            <div className="rounded-top p-30 pb-2 d-flex align-items-center">
              <h3 className="card-title mb-0">{title}</h3>
              <span className="badge bg-primary ms-3">{count} new</span>
            </div>
          </li>
          <li className="p-30 pt-0">
            <div
              className="message-center message-body position-relative ps-container ps-theme-default"
              data-ps-id="4d381e96-8630-83b1-9b51-234b480b44a9"
            >
              {children ? children : "empty"}
              <div
                className="ps-scrollbar-x-rail"
                style={{ left: 0, bottom: 0 }}
              >
                <div
                  className="ps-scrollbar-x"
                  tabIndex={0}
                  style={{ left: 0, width: 0 }}
                />
              </div>
              <div className="ps-scrollbar-y-rail" style={{ top: 0, right: 3 }}>
                <div
                  className="ps-scrollbar-y"
                  tabIndex={0}
                  style={{ top: 0, height: 0 }}
                />
              </div>
            </div>
            <div className="mt-4">
              <a className="btn btn-info text-white">See all</a>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
}
