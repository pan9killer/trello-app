export interface Board {
  header: string;
  desc: string;
}

export interface ElementHeader {
  headerElement: string;
}

export interface State {
  id: number;
  icon: string;
  status: string;
  title: string;
  description?: string;
}

export interface States extends Array<State> {}

export interface Action {
  payload: States;
  type: string;
}

export interface Board {
  header: string;
  lists: Array<number>;
  id: number;
  desc: string;
  href: string;
}

export interface BoardBlock {
  header: string;
  desc: string;
}

export interface Boards extends Array<Board> {}

export interface BoardAction {
  payload: Board;
  type: string;
}

export interface HeadTags {
  title: string;
  description: string;
}

export interface ModalWindow {
  active: boolean;
  setActive: Function;
}
