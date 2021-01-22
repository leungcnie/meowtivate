import progressReducer from "./prograssReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  progress: progressReducer,
});

export default rootReducer;
