import { ReactNode, createContext, useContext, useState } from "react";
import { PreferenceProps, TSkins, ThemeType } from "../PreferenceType";

//get system schema in

//preference initialization values
const PreferenceContext = createContext<PreferenceProps>({
  theme: "dark",
  themeSkin: "skin5",
  switchTheme: () => null,
  setThemeSkin: () => null,
});

// eslint-disable-next-line react-refresh/only-export-components
export function usePreference(): PreferenceProps {
  return useContext(PreferenceContext);
}

export default function Preference({ children }: { children: ReactNode }) {
  const [theme, switchTheme] = useState<ThemeType>("dark");
  const [themeSkin, setThemeSkin] = useState<TSkins>("skin5");

  return (
    <PreferenceContext.Provider
      value={{ theme, themeSkin, switchTheme, setThemeSkin }}
    >
      {children}
    </PreferenceContext.Provider>
  );
}
