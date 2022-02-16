import { combineReducers } from "@reduxjs/toolkit";
import { linksReducer } from "./links/slice";

export const appReducer = combineReducers({
    linksState: linksReducer
});

export type AppState = ReturnType<typeof appReducer>

export * from './links';