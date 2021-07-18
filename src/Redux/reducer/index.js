import { combineReducers } from "redux";
import { musicsReducer } from "./musicReducer";
import { usersReducer } from "./usersReducer";

export const reducers = combineReducers({
    Users: usersReducer,
    Musics: musicsReducer,
})