import { DRAG_DROP } from "../constants";
import { State } from "../../interfaces/interface";

export const dragToDrop = (payload: State) => ({ type: DRAG_DROP, payload });
