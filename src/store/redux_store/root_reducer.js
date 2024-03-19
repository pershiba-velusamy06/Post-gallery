
import { combineReducers } from "redux";
import * as reducer from './reset_action'
const combinedReducers = combineReducers({
  fetchUser: reducer.fetchUserWrapper
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};
export default rootReducer;
