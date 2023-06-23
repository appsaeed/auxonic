import { useEffect } from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import settings from "./app/settings";
import { useAuth } from "./context/AuthContext";
import menusList from "./menus";
import Login from "./views/auth/Login";
import Nopage from "./views/dashboard/Nopage";
import Headers from "./views/layout/headers/Headers";
import Sidebar from "./views/layout/menus/Sidebar";

export const RouterProvidor = ({
  basename,
  children,
}: {
  basename?: string | undefined;
  children: React.ReactNode;
}) => {
  if (!import.meta.env.DEV) {
    return <BrowserRouter basename={basename}>{children}</BrowserRouter>;
  } else {
    return <HashRouter>{children}</HashRouter>;
  }
};

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
    <RouterProvidor basename={settings.basename}>
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
    </RouterProvidor>
  );
}
