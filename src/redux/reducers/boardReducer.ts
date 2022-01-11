import { ADD_BOARD, SET_BOARD } from "../constants";
import { Board, Boards, BoardAction } from "../../interfaces/interface";

const initialState = [
  {
    id: 0,
    lists: [0],
    header: "Brackets",
    desc: "Saving money – is something we would all like.",
    href: "/brackets",
  },
  {
    id: 1,
    lists: [0],
    header: "Pictures In The Sky",
    desc: "In the last five to six years the FTA satellite receiver has become an everyday household electronic device.",
    href: "/brackets",
  },
];

const boardsReducer = (state = initialState, action: BoardAction): any => {
  switch (action.type) {
    case ADD_BOARD:
      const newBoard = action.payload;
      return [...state, newBoard];

    default:
      return state;
  }
};

export default boardsReducer;
