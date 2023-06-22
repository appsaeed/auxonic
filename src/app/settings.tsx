interface SettingsTypes {
  url: string;
  name: string;
  title: string;
  lang: string;
  logo: string | null;
  desc: string;
  favicon: string | null;
  basename: string;
  auth_session: string;
}

import data from "./settingJson";
import { unslash } from "./utils/url";

const __url = window.location.protocol + "//" + window.location.host;

const settings: SettingsTypes = {
  /**
   * app url
   */
  url: unslash(__url),
  /**
   * name
   */
  name: data?.name || "name",

  /**
   * title
   */
  title: data?.title || "title",

  /**
   * app logo
   */
  logo: data.logo || "",

  /**
   * app lang
   */
  lang: data?.lang || "en-US",

  /**
   * app description
   */
  desc: data?.desc || "",

  /**
   * app favicon
   */
  favicon: data?.favicon || "",

  /**
   * app base route
   */

  basename: data?.basename || "",

  /**
   * app stroage name
   */
  auth_session: import.meta.env.VITE_AUTH_SESSTION || "",
};
export default settings;
