import { ADD_BOARD, SET_BOARD } from "../constants";
import { Board } from "../../interfaces/interface";

export const setBoard = (payload: Board) => ({ type: SET_BOARD, payload });
export const addBoard = (payload: Board) => ({ type: ADD_BOARD, payload });
