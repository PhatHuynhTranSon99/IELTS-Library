import { combineReducers } from "@reduxjs/toolkit";
import hotReducer from "./Hot";
import cambridgeReducer from "./Cambridge";
import gelReducer from "./GEL";
import latestReducer from "./Latest";

const collectionReducer = combineReducers({
    hot: hotReducer,
    latest: latestReducer,
    cambridge: cambridgeReducer,
    gel: gelReducer
});

export default collectionReducer;