import { handleAction } from "redux-actions";
import { combineReducers } from "redux";
import { SAVE_USER_TOKEN } from "./actions";

const token = handleAction(SAVE_USER_TOKEN, (_, { payload }) => payload, "");

export default combineReducers({
  token
});
