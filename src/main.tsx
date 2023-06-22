import React from "react";
import ReactDOM from "react-dom/client";
import settings from "./app/settings";

//stylesheets
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/body.css";
import "./assets/css/bootstrap.css";
import "./assets/css/custom-fonts.css";
import "./assets/css/scrollbar.css";
import "./assets/css/style.min.css";
import "./index.css";

//content prodivors
import { GoogleOAuthProvider } from "@react-oauth/google";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./Router";
import ThemeElemet from "./ThemeElemet";
import AuthProvider from "./api/context/AuthContext";
import Preference from "./api/context/PreferenceContext";

//main compoents for rendering context and components
export const Index = () => {
  return (
    <Preference>
      <ThemeElemet>
        <AuthProvider>
          <HashRouter basename={settings.basename}>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_G_AUTH_CLIENT}>
              <ToastContainer />
              <Router />
            </GoogleOAuthProvider>
          </HashRouter>
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
