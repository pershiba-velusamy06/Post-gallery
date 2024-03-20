
import { combineReducers } from "redux";
import * as reducer from './reset_action'
const combinedReducers = combineReducers({
  fetchPost: reducer.fetchPostWrapper,
  postData:reducer.createPostWrapper

});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};
export default rootReducer;
