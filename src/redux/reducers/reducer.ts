import { DRAG_DROP } from "../constants";
import { State, States, Action } from "../../interfaces/interface";

const initialState: Array<States> = [
  [
    {
      id: 1,
      icon: "🍺",
      status: "open",
      title:
        "Old fashioned recipe for preventing allergies and chemical sensitivities",
    },
    {
      id: 2,
      icon: "🍻",
      status: "open",
      title: "Home business advertising ideas",
      description:
        "Successful businesses know the importance of building and maintaining good working.",
    },
    {
      id: 3,
      icon: "🍻",
      status: "open",
      title: "Cosmetic surgery abroad making the right choice",
    },
  ],
];

export const reducer = (
  state = initialState,
  action: Action
): Array<States> => {
  switch (action.type) {
    case DRAG_DROP:
      return [...state, action.payload];

    default:
      return state;
  }
};
