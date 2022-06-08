import { combineReducers, configureStore } from "@reduxjs/toolkit";
import readingReducer from "./Reading";
import listeningReducer from "./Listening";
import writingReducer from "./Writing";
import speakingReducer from "./Speaking";

const reducer = combineReducers({
    reading: readingReducer,
    listening: listeningReducer,
    writing: writingReducer,
    speaking: speakingReducer
});

const store = configureStore({
    reducer
});

export default store;