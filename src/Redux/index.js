import { combineReducers, configureStore } from "@reduxjs/toolkit";
import readingReducer from "./Reading";
import listeningReducer from "./Listening";

const reducer = combineReducers({
    reading: readingReducer,
    listening: listeningReducer
});

const store = configureStore({
    reducer
});

export default store;