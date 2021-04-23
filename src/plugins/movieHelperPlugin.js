import { extractYearFromDate } from "./filters/extractYearFromDate";
import { joinByComma } from "./filters/joinByComma";

export function install(Vue) {
  Vue.filter("extractYear", extractYearFromDate);
  Vue.filter("joinByComma", joinByComma);
}
