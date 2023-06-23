import menus from "../menus";
import { ThemeType } from "../types/preferences";
import settings from "./settings";

/**
 * find manu item from menu list
 * @method findMenuNameByPath
 * @param path string
 * @returns {string}
 */
export const findMenuNameByPath = (path: string): string | null => {
  const _path = path.toString().replace(/\//g, "").toLowerCase();
  return menus.find((item) => item.slug === _path)?.name || null;
};

/**
 * get page title from menu item
 * @param pathname string
 * @returns {string}
 */
export const getTitleByPath = (pathname: string, separator = "-"): string => {
  const menuname = findMenuNameByPath(pathname);
  if (menuname) {
    return `${menuname.toString()} ${separator} ${settings.name}`;
  }
  return settings.name;
};

//create  a stroe from save theme settings
export function getThemeStroe(): ThemeType | string | null {
  return localStorage.getItem("theme_mode");
}

export function setThemeStroe(mode: ThemeType) {
  localStorage.setItem("theme_mode", mode);
}
