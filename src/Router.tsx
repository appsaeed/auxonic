import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./api/context/AuthContext";
import menusList from "./menus";
import Login from "./views/auth/Login";
import Nopage from "./views/dashboard/Nopage";
import Headers from "./views/layout/headers/Headers";
import Sidebar from "./views/layout/menus/Sidebar";

export function Navigator() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.user) {
      navigate("/login");
    }
  }, [auth.user, navigate]);

  return (
    <>
      <Headers />
      <Sidebar />
    </>
  );
}

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route>
        <Route path="/" element={<Navigator />}>
          {menusList.map((menu, i) => (
            <Route path={menu.slug} element={menu.elem} key={i} />
          ))}
        </Route>
      </Route>
      <Route path="/*" element={<Nopage />} />
    </Routes>
  );
}
