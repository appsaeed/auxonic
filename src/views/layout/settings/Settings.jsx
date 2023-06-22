import React from "react";
import SettingLoader from "../../../components/loader/SettingLoader";
import Message from "./Message";

const LayoutSettings = ({ name, id, className }) => {
  return (
    <>
      <div className="form-check mt-3">
        <input
          type="checkbox"
          name="theme-view"
          className={"form-check-input " + className}
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          <span>{name}</span>
        </label>
      </div>
    </>
  );
};

const SkinColor = ({ skin, data }) => {
  return (
    <li className="theme-item list-inline-item me-1">
      {(() => {
        if (data === "logobg") {
          return (
            <a
              className="theme-link rounded-circle d-block"
              data-logobg={"skin" + skin}
            ></a>
          );
        } else if (data === "navbarbg") {
          return (
            <a
              className="theme-link rounded-circle d-block"
              data-navbarbg={"skin" + skin}
            ></a>
          );
        } else if (data === "sidebarbg") {
          return (
            <a
              className="theme-link rounded-circle d-block"
              data-sidebarbg={"skin" + skin}
            ></a>
          );
        } else {
          return (
            <a
              className="theme-link rounded-circle d-block"
              data-logobg={"skin" + skin}
            ></a>
          );
        }
      })()}
    </li>
  );
};

const SwitchColor = ({ name, data }) => {
  return (
    <>
      <div className="p-3 border-bottom">
        {/* <!-- Logo BG --> */}
        <h5 className="font-weight-medium mb-2 mt-2">{name}</h5>
        <ul className={"m-0 p-0 theme-color "}>
          <SkinColor skin={1} data={data} />
          <SkinColor skin={2} data={data} />
          <SkinColor skin={3} data={data} />
          <SkinColor skin={4} data={data} />
          <SkinColor skin={5} data={data} />
          <SkinColor skin={6} data={data} />
        </ul>
        {/* <!-- Logo BG --> */}
      </div>
    </>
  );
};

const ActivityList = ({ name, image, classes, icon, date, message }) => {
  const classNames = classes
    ? `sl-left bg-light-${classes} text-${classes}`
    : " sl-left ";
  return (
    <div className="sl-item">
      <div className={classNames}>
        {image ? (
          <img
            className="rounded-circle"
            alt="user"
            src={`./assets/image/avatars/${image}.jpg`}
          />
        ) : (
          <i data-feather={icon}></i>
        )}
      </div>
      <div className="sl-right">
        <div className="font-weight-medium">
          {name} {date && <span className="sl-date"> {date} ago</span>}
        </div>
        <div className="desc">{message ? message : "demo message"}</div>
      </div>
    </div>
  );
};

export default function Settings() {
  return (
    <>
      <aside className={"customizer"}>
        <SettingLoader />
      </aside>
    </>
  );
}

const SettingBody = () => {
  return (
    <div
      className="customizer-body ps-container ps-theme-default"
      data-ps-id="4bb4269e-4eb3-b1a0-c6b2-0afcebc43b44"
    >
      <ul className="nav customizer-tab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/flexy-bootstrap/package/html/main/index.html#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <i className="ri-tools-fill fs-6"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            href={"#"}
            role="tab"
            aria-controls="chat"
            aria-selected="false"
          >
            <i className="ri-message-3-line fs-6"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/flexy-bootstrap/package/html/main/index.html#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            <i className="ri-timer-line fs-6"></i>
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {/* <!-- Tab 1 --> */}
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="p-3 border-bottom">
            {/* <!-- Sidebar --> */}
            <h5 className="font-weight-medium mb-2 mt-2">Layout Settings</h5>

            <LayoutSettings name={"Dark Theme"} id={"theme-view"} />
            <LayoutSettings
              name={"Collapse Sidebar"}
              id={"collapssidebar"}
              className={"sidebartoggler"}
            />
            <LayoutSettings name={"Fixed Sidebar"} id={"sidebar-position"} />
            <LayoutSettings name={"Fixed Header"} id={"header-position"} />
            <LayoutSettings name={"Boxed Layout"} id={"boxed-layout"} />
          </div>

          <SwitchColor data={"logobg"} name={"Logo Background"} />
          <SwitchColor data={"navbarbg"} name={"Navbar Backgrounds"} />
          <SwitchColor data={"sidebarbg"} name={"Sidebar Backgrounds"} />
        </div>
        {/* <!-- End Tab 1 -->
  <!-- Tab 2 --> */}
        <div
          className="tab-pane fade"
          id="chat"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <ul className="mailbox list-style-none mt-3">
            <li>
              <div
                className="message-center chat-scroll position-relative ps-container ps-theme-default"
                data-ps-id="3d8f9450-548d-74a6-2aca-4194d0f0fb57"
              >
                <Message
                  name={"jon don"}
                  image={1}
                  message={"you need to check"}
                  status={"offline"}
                />
                <Message
                  name={"jon don"}
                  image={2}
                  message={"you need to check"}
                  status={"online"}
                />
                <Message
                  name={"jon don"}
                  image={3}
                  message={"you need to check"}
                  status={"away"}
                />
                <Message
                  name={"jon don"}
                  image={4}
                  message={"you need to check"}
                  status={"busy"}
                />
                <Message
                  name={"jon don"}
                  image={5}
                  message={"you need to check"}
                  status={"online"}
                />
                <Message
                  name={"jon don"}
                  image={6}
                  message={"you need to check"}
                  status={"offline"}
                />
                <Message
                  name={"jon don"}
                  image={7}
                  message={"you need to check"}
                  status={"busy"}
                />

                <div
                  className="ps-scrollbar-x-rail"
                  style={{ left: "0px", bottom: "0px" }}
                >
                  <div
                    className="ps-scrollbar-x"
                    tabIndex="0"
                    style={{ left: "0px", width: "0px" }}
                  ></div>
                </div>
                <div
                  className="ps-scrollbar-y-rail"
                  style={{ top: "0px", right: "3px" }}
                >
                  <div
                    className="ps-scrollbar-y"
                    tabIndex="0"
                    style={{ top: "0px", height: "0px" }}
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- End Tab 2 -->
  <!-- Tab 3 --> */}
        <div
          className="tab-pane fade p-3"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <h6 className="mt-3 mb-3">Activity Timeline</h6>
          <div className="steamline">
            <ActivityList
              name={"text name"}
              icon={"user"}
              classes={"success"}
              date={"3min "}
            />
            <ActivityList name={"text name"} icon={"camera"} classes={"info"} />
            <ActivityList name={"text name"} image={2} date={"6min"} />
            <ActivityList name={"text name"} image={1} date={"7min"} />

            <ActivityList
              name={"text name"}
              icon={"user"}
              classes={"primary"}
              date={"9min"}
            />

            <ActivityList
              name={"text name"}
              icon={"send"}
              classes={"info"}
              date={"9min"}
            />
            <ActivityList name={"text name"} image={4} date={"7min"} />
            <ActivityList name={"text name"} image={6} date={"7min"} />

            <ActivityList
              name={"text name"}
              icon={"bell"}
              classes={"warning"}
              date={"9min"}
            />
            <ActivityList
              name={"text name"}
              icon={"moon"}
              classes={"dark"}
              date={"9min"}
            />
            <ActivityList
              name={"text name"}
              icon={"server"}
              classes={"secondary"}
              date={"9min"}
            />
            <ActivityList
              name={"text name"}
              icon={"database"}
              classes={"dark"}
              date={"9min"}
            />
            <ActivityList
              name={"text name"}
              icon={"alert-circle"}
              classes={"danger"}
              date={"9min"}
            />
          </div>
        </div>
        {/* <!-- End Tab 3 --> */}
      </div>
      <div
        className="ps-scrollbar-x-rail"
        style={{ left: "0px", bottom: "0px" }}
      >
        <div
          className="ps-scrollbar-x"
          tabIndex="0"
          style={{ left: "0px", width: "0px" }}
        ></div>
      </div>
      <div className="ps-scrollbar-y-rail" style={{ top: "0px", right: "3px" }}>
        <div
          className="ps-scrollbar-y"
          tabIndex="0"
          style={{ top: "0px", height: "0px" }}
        ></div>
      </div>
    </div>
  );
};
