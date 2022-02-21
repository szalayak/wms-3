import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from './app'
import { warehousesReducer } from './warehouses'

export const rootReducer = combineReducers({
  warehousesState: warehousesReducer,
  appState: appReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export * from './warehouses'
