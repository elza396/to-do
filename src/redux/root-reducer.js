import {combineReducers} from "redux";
import {toDo} from "./to-do/reducer";

export const rootReducer = combineReducers({
    toDo
});
