import { baseURL } from "utilies";
import logo from "../../public/icons/favicon-32x32.png";
import favicon from "../../public/icons/favicon.ico";
export default {
  /**
   * app local
   */
  dev: import.meta.env.DEV || false,
  /**
   * app url
   */
  url: baseURL(import.meta.env.VITE_BASENAME || ""),
  /**
   * name
   */
  name: import.meta.env.VITE_NAME || "name",

  /**
   * title
   */
  title: import.meta.env.VITE_TITLE || "title",

  /**
   * app logo
   */
  logo,

  /**
   * app lang
   */
  lang: import.meta.env.VITE_LANG || "en-US",

  /**
   * app description
   */
  desc: import.meta.env.VITE_DESCRIPTION || "",

  /**
   * app favicon
   */
  favicon: favicon || "",

  /**
   * app base route
   */

  basename: import.meta.env.VITE_BASENAME || "",

  /**
   * app stroage name
   */
  auth_session: import.meta.env.VITE_AUTH_SESSTION || "authSession",
};
