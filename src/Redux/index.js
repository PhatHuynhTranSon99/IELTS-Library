import { combineReducers, configureStore } from "@reduxjs/toolkit";
import readingReducer from "./Reading";

const reducer = combineReducers({
    reading: readingReducer
});

const store = configureStore({
    reducer
});

export default store;