import { ReactNode, useEffect } from "react";
import { usePreference } from "./api/context/PreferenceContext";

export default function ThemeElemet({ children }: { children: ReactNode }) {
  const preference = usePreference();
  useEffect(() => {
    document.body.setAttribute("data-theme", preference.theme);
  }, [preference.theme]);
  return (
    <div
      id="main-wrapper"
      data-theme={preference.theme}
      data-sidebartype={"full"}
      data-layout={"vertical"}
      data-navbarbg={"skin5"}
      data-sidebar-position={"fixed"}
      data-header-position={"absolute"}
      data-header-boxed-layout={"full"}
    >
      {children}
    </div>
  );
}
