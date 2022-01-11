import { Board } from "../interfaces/interface";

export const newBoard = (label: string): Board => {
  return {
    id: Date.now(),
    lists: [0],
    header: label,
    desc: "newDesc",
    href: "/brackets",
  };
};
