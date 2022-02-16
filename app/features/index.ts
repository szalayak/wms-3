import { combineReducers } from "@reduxjs/toolkit";
import { linksReducer } from "./links/slice";

export const rootReducer = combineReducers({
    linksState: linksReducer
});

export type AppState = ReturnType<typeof rootReducer>

export * from './links';