import React from "react";
import ReactDOM from "react-dom/client";

//stylesheets
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/body.css";
import "./assets/css/bootstrap.css";
import "./assets/css/custom-fonts.css";
import "./assets/css/scrollbar.css";
import "./index.css";

//content prodivors
import { GoogleOAuthProvider } from "@react-oauth/google";
import Router from "./Router";
import ThemeElemet from "./ThemeElemet";
import AuthProvider from "./context/AuthContext";
import Preference from "./context/PreferenceContext";

import { registerSW } from "virtual:pwa-register";

registerSW({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onNeedRefresh() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOfflineReady() {},
});

// if (import.meta.env.DEV && "serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("./sw.js", { scope: "./" });
//   });
// }

//main compoents for rendering context and components
export const Index = () => {
  return (
    <Preference>
      <ThemeElemet>
        <AuthProvider>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_G_AUTH_CLIENT}>
            <Router />
          </GoogleOAuthProvider>
        </AuthProvider>
      </ThemeElemet>
    </Preference>
  );
};

/**
 * Reader React component
 */
const rootdiv = import.meta.env.VITE_ROOTDIV || "%VITE_ROOTDIV%";
//main element selector
const element = document.getElementById(rootdiv) as HTMLElement;
//component renderer
ReactDOM.createRoot(element).render(<React.StrictMode children={<Index />} />);
