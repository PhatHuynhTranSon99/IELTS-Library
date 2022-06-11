import { combineReducers, configureStore } from "@reduxjs/toolkit";
import readingReducer from "./Reading";
import listeningReducer from "./Listening";
import writingReducer from "./Writing";
import speakingReducer from "./Speaking";
import collectionReducer from "./Collections";

const reducer = combineReducers({
    reading: readingReducer,
    listening: listeningReducer,
    writing: writingReducer,
    speaking: speakingReducer,
    collections: collectionReducer
});

const store = configureStore({
    reducer
});

export default store;