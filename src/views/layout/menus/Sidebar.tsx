import menus from "../../../menus";

import { useEffect } from "preact/hooks";
import { Outlet, useLocation } from "react-router-dom";
import { jqueryMenu } from "../../../app/CustomScript";
import { getTitleByPath } from "../../../app/functions";
import { usePreference } from "../../../context/PreferenceContext";
import useTitle from "../../../hooks/useTitle";
import Mainmenu from "./Mainmenu";
import Menugap from "./Menugap";
import Submenu from "./Submenu";

export default function Sidebar() {
  useTitle(getTitleByPath(useLocation().pathname));
  const preference = usePreference();
  useEffect(() => {
    jqueryMenu();
  });
  return (
    <>
      <aside className="left-sidebar" data-sidebarbg={preference.themeSkin}>
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="in">
              {menus.map((data, index) => {
                // eslint-disable-next-line no-prototype-builtins
                if (data.hasOwnProperty("gaps")) {
                  return (
                    <Menugap name={data.name} icon={data.icon} key={index} />
                  );
                  // eslint-disable-next-line no-prototype-builtins
                } else if (data.hasOwnProperty("submenu")) {
                  return (
                    <Mainmenu
                      name={data.name}
                      icon={data.icon}
                      url={data.slug}
                      key={index}
                    >
                      {data?.submenu?.map((sub, subIndex) => {
                        return (
                          <Submenu
                            name={sub.name}
                            icon={sub.icon}
                            url={sub.slug}
                            key={subIndex}
                          />
                        );
                      })}
                    </Mainmenu>
                  );
                } else {
                  return (
                    <Mainmenu
                      name={data.name}
                      icon={data.icon}
                      url={data.slug}
                      key={index}
                    />
                  );
                }
              })}
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
      <Outlet />
    </>
  );
}
