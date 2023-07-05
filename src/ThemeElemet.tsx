import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { usePreference } from "./context/PreferenceContext";

export default function ThemeElemet({ children }: { children: ReactNode }) {
  const preference = usePreference();
  useEffect(() => {
    document.body.setAttribute("data-theme", preference.theme);
  }, [preference.theme]);
  const toastaTheme = preference.theme === "dark" ? "dark" : "light";

  //sw register
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // async function register(filename: string) {
    //   if ("serviceWorker" in navigator) {
    //     console.log("serviceWorker");
    //     //create cache link
    //     const localArray: (string | null)[] = [];
    //     document.querySelectorAll("[src],[href]").forEach(function (node) {
    //       if (node.getAttribute("src")) {
    //         localArray.push(node.getAttribute("src"));
    //       } else if (node.getAttribute("href")) {
    //         localArray.push(node.getAttribute("href"));
    //       }
    //     });

    //     //process to register serviceWorker
    //     navigator.serviceWorker.ready.then((registration) => {
    //       if (registration.active) registration.active.postMessage(localArray);
    //     });
    //     try {
    //       await navigator.serviceWorker.register(filename);
    //     } catch (e) {
    //       console.log(`SW registration failed: ${e}`);
    //     }
    //   }
    // }
    document.addEventListener("DOMContentLoaded", () => {
      // register("/ftools/sw.js");
    });
  }, []);
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
