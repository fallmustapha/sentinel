import { pathOr } from "ramda";


export const side_bar_state_selector=pathOr(false,["navigation","isSideBarOpened"]);