import * as Fa from "react-feather";
import { useAuth } from "../../../context/AuthContext";
import { UserProps } from "../../../types/auth";
import { HtmlSpanType } from "../../../types/dom";
import { Children } from "../../../types/global";
import GuestMenu from "./GuestMenu";

type AccountItesProps = {
  icon?: Children;
  name?: string;
  message?: string;
  classes?: string;
};

const AccountItem = ({ icon, name, message, classes }: AccountItesProps) => {
  return (
    <a className="message-item px1 d-flex align-items-center border-bottom">
      <span
        className={
          classes
            ? `btn btn-light-${classes} rounded-circle fs-6 fs-6 text-${classes}`
            : "btn btn-rounded-lg btn-light-success rounded-circle text-success"
        }
      >
        {icon ? icon : <i data-feather="shield"></i>}
      </span>
      <div className="w-75 d-inline-block v-middle ps-3 ms-1">
        <h5 className="message-title mb-0 mt-1 fs-4 font-weight-medium d-flex align-items-center">
          {name ? name : "name"}
          <span className="mt-n2 ms-1">
            <i
              className={
                classes
                  ? `mdi mdi-checkbox-blank-circle fs-1 text-${classes}`
                  : "mdi mdi-checkbox-blank-circle fs-1 text-success"
              }
            />
          </span>
        </h5>
        <span className="fs-3 text-nowrap d-block time text-truncate fw-normal mt-1 text-muted">
          {message ? message : "empty!"}
        </span>
      </div>
    </a>
  );
};

const ButtonLink = () => {
  return (
    <>
      <div className="mt-4">
        <a href="#" className="text-dark fs-3 font-weight-medium hover-primary">
          Account Settings
        </a>
        <a href="#" className="text-dark fs-3 font-weight-medium hover-primary">
          Frequently Asked Questions
        </a>
        <a href="#" className="text-dark fs-3 font-weight-medium hover-primary">
          Pricing
        </a>
      </div>
      <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}>
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
    </>
  );
};

type AccountProps = { user: UserProps };

export default function Account({ user }: AccountProps) {
  //guest menu
  // if (!auth) {
  //   return <GuestMenu />;
  // }

  // //loading menu
  // if (!user) {
  //   return <LoadingMenu />;
  // }

  if (!user) {
    return <GuestMenu />;
  }

  //return component
  return (
    <>
      <li className="nav-item dropdown profile-dropdown">
        <a
          className="nav-link dropdown-toggle d-flex align-items-center"
          data-bs-toggle="dropdown"
        >
          {user?.picture ? (
            <>
              <img
                src={user.picture}
                alt="user"
                width={30}
                className="profile-pic rounded-circle"
              />
            </>
          ) : (
            <>
              <span className="btn btn-light-info text-success btn-circle">
                <Fa.UserCheck />
              </span>
            </>
          )}
        </a>

        <AccountPopup
          name={user.name}
          image={user.picture}
          email={user.email}
        />
      </li>
    </>
  );
}

const AccountPopup = ({
  name,
  image,
  email,
}: {
  name: string;
  image: string;
  email: string;
}) => {
  const auth = useAuth();
  return (
    <div className="dropdown-menu dropdown-menu-end mailbox dropdown-menu-animate-up">
      <ul className="list-style-none">
        <li className="p-3">
          <div className="rounded-top d-flex align-items-center">
            <h3 className="card-title mb-0">{name || "Account"}</h3>
            <div className="ms-auto">
              <a href="#" className="link py-0">
                <Fa.XCircle />
              </a>
            </div>
          </div>
          {/* user details */}
          <div className="d-flex align-items-center p-2 border-bottom">
            {image ? (
              <img
                src={image}
                alt="user"
                width={50}
                className="rounded-circle"
              />
            ) : (
              <Fa.UserPlus />
            )}
            <div className="ms-4">
              <span className="text-muted">admin</span>
              <p className="text-muted mb-0 mt-1">
                <a href={"mailto:" + email}>
                  <i className="mdi mdi-email"></i> {email}
                </a>
              </p>
            </div>
          </div>
          {/* user details */}
        </li>
        <li className="p-30 pt-0">
          <div className="message-center message-body" style={{ height: 210 }}>
            <AccountItem icon={<i className="mdi mdi-security"></i>} />
            <AccountItem icon={<i className="ri ri-paypal-line"></i>} />
            <AccountItem icon={<i className="ri ri-paypal-line"></i>} />
            <AccountItem icon={<i className="ri ri-paypal-line"></i>} />
            <AccountItem icon={<i className="ri ri-paypal-line"></i>} />
            <AccountItem icon={<i className="ri ri-paypal-line"></i>} />

            <ButtonLink />
          </div>

          <div className="account-footer mt-4 d-flex justify-content-between">
            <AccoountBottomItem
              color="info"
              onClick={() => {
                auth.onLogout();
              }}
            >
              <i className="ri ri-logout-circle-r-line"></i>
            </AccoountBottomItem>
            <AccoountBottomItem color="danger">
              <i className="bi bi-youtube"></i>
            </AccoountBottomItem>
            <AccoountBottomItem color="warning">
              <i className="mdi mdi-help-circle"></i>
            </AccoountBottomItem>
            <AccoountBottomItem color="success">
              <i className="ri ri-facebook-circle-fill"></i>
            </AccoountBottomItem>
          </div>
        </li>
      </ul>
    </div>
  );
};

type AccountBottomProps = HtmlSpanType & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rest?: any;
  color: string;
  children: Children;
};
const AccoountBottomItem = ({
  color,
  children,
  ...rest
}: AccountBottomProps) => {
  const _color = color ? color : "primary";
  return (
    <span
      {...rest}
      className={`btn btn-light-${_color} text-info btn-circle fs-8`}
    >
      {children}
    </span>
  );
};
