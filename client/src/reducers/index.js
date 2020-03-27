import { combineReducers } from "redux";
import userReducer from "./user";
import sessionReducer from "./session";
import messageReducer from "./message";
import roomReducer from "./room";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,
  roomState: roomReducer
});

export default rootReducer;
