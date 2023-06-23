import * as Fa from "react-feather";
import { useAuth } from "../../../context/AuthContext";
import { usePreference } from "../../../context/PreferenceContext";
import Account from "./Account";
import Dropdown from "./Dropdown";
import HeaderList from "./HeaderList";
import Message from "./Message";
import Notification from "./Notification";

export default function HeaderRight() {
  const preference = usePreference();
  const auth = useAuth();
  function switchTheme() {
    const theme = preference.theme === "light" ? "dark" : "light";
    preference.switchTheme(theme);
    if (theme === "dark") {
      preference.setThemeSkin("skin5");
    } else {
      preference.setThemeSkin("skin6");
    }
  }
  return (
    <>
      <ul className="navbar-nav">
        <HeaderList onClick={switchTheme} style={{ cursor: "pointer" }}>
          {preference.theme === "dark" ? <Fa.Moon /> : <Fa.Sun />}
        </HeaderList>

        {import.meta.env.DEV && (
          <>
            <Dropdown title="Messages" count={6} icon={<Fa.MessageCircle />}>
              <Message image={1} status={"online"} />
              <Message image={2} status={"offline"} />
              <Message image={3} status={"away"} />
              <Message image={4} status={"busy"} />
              <Message image={5} status={"busy"} />
              <Message image={6} status={"busy"} />
              <Message image={4} status={"busy"} />
            </Dropdown>
            <Dropdown title="Notifications" count={10} icon={<Fa.Bell />}>
              <Notification icon={<Fa.Airplay />} />
              <Notification icon={<Fa.FastForward />} />
              <Notification icon={<Fa.AlignJustify />} />
              <Notification icon={<Fa.DollarSign />} />
              <Notification icon={<Fa.Figma />} />
              <Notification icon={<Fa.FileMinus />} />
              <Notification icon={<Fa.Filter />} />
              <Notification icon={<Fa.FilePlus />} />
            </Dropdown>
          </>
        )}

        <Account user={auth.user} />
      </ul>
    </>
  );
}
