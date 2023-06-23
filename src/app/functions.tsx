import menus from "../menus";
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
