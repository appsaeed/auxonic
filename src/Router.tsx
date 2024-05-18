import { BrowserRouter, Route, Routes } from "react-router-dom";
import settings from "./app/settings";
import menusList from "./menus";
import ForgetPassword from "./views/auth/ForgetPassword";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Nopage from "./views/dashboard/Nopage";
import Headers from "./views/layout/headers/Headers";
import Sidebar from "./views/layout/menus/Sidebar";

export function Navigator() {
  return (
    <>
      <Headers />
      <Sidebar />
    </>
  );
}

export default function Router() {
  // const basename = settings.dev ? "" : settings.basename;
  return (
    <BrowserRouter basename={settings.basename}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route>
          <Route path="/" element={<Navigator />}>
            <Route index element={menusList[0].elem} />
            {menusList.map((menu, i) => (
              <Route path={menu.slug} element={menu.elem} key={i} />
            ))}
          </Route>
        </Route>
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}
