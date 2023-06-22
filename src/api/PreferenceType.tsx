export type ThemeType = "dark" | "light" | "auto";

export type TSkins = "skin1" | "skin2" | "skin3" | "skin4" | "skin5" | "skin6";

export type PreferenceProps = {
  theme: ThemeType;
  themeSkin: TSkins;
  switchTheme: (theme: ThemeType) => void;
  setThemeSkin: (theme: TSkins) => void;
};
