import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { usePreference } from "./context/PreferenceContext";

export default function ThemeElemet({ children }: { children: ReactNode }) {
  const preference = usePreference();
  useEffect(() => {
    document.body.setAttribute("data-theme", preference.theme);
  }, [preference.theme]);
  const toastaTheme = preference.theme === "dark" ? "dark" : "light";
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={toastaTheme}
      />
      <div
        id="main-wrapper"
        data-theme={preference.theme}
        data-sidebartype={preference.sidebarType}
        data-layout={preference.themeLayout}
        data-navbarbg={preference.themeSkin}
        data-sidebar-position={preference.sidebarPosition}
        data-header-position={preference.headerPosition}
        data-header-boxed-layout={preference.boxLayout}
      >
        {children}
      </div>
    </>
  );
}
