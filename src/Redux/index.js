import { combineReducers, configureStore } from "@reduxjs/toolkit";
import readingReducer from "./Reading";
import listeningReducer from "./Listening";
import writingReducer from "./Writing";

const reducer = combineReducers({
    reading: readingReducer,
    listening: listeningReducer,
    writing: writingReducer
});

const store = configureStore({
    reducer
});

export default store;