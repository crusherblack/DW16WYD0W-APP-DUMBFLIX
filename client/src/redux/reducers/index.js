import { combineReducers } from "redux"; //Root Reducers

import film from "./film";
import auth from "./auth";

export default combineReducers({ film, auth });
