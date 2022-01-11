import { createStore, combineReducers } from "redux";
import { reducer } from "./reducers/reducer";
import boardReducer from "./reducers/boardReducer";

const reducers = combineReducers({
  reducer,
  boardReducer,
});

const store = createStore(reducers);
export type RootState = ReturnType<typeof store.getState>;
export default store;
