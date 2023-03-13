import { combineReducers } from "redux";
import handReducer from "./../stateHand/stateHand";

const rootReducer = combineReducers({
  handReducer,
});

export { rootReducer };
