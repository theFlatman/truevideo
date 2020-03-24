import { combineReducers } from "redux";
import userReducer from "./user";
import sessionReducer from "./session";
import messageReducer from "./message";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer
});

export default rootReducer;
