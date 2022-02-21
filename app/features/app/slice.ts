import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState: App = { sidebar: false }

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedWarehouse: (state, action) => {
      state.selectedWarehouse = action.payload
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar
    }
  },
})

export const appReducer = slice.reducer

export const { setSelectedWarehouse, toggleSidebar } = slice.actions

export const appState = (state: RootState) => state.appState
