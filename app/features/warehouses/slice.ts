import { gql } from '@apollo/client'
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { RootState } from '..'
import { GraphQLClient } from '../../apollo-client'

const adapter = createEntityAdapter<Warehouse>()
const initialState = adapter.getInitialState()

export const warehouseThunks = {
  list: createAsyncThunk('warehouses/list', async (_, thunkAPI): Promise<Warehouse[]> => {
    return (thunkAPI.extra as GraphQLClient).query(
      'warehouses',
      gql`
        query getWarehouses {
          warehouses {
            id
            name
            createdAt
            updatedAt
          }
        }
      `
    )
  }),
}

const slice = createSlice({
  name: 'warehouses',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(warehouseThunks.list.fulfilled, adapter.setAll),
})

export const { selectAll: selectWarehouses, selectById: selectWarehouseById } =
  adapter.getSelectors((state: RootState) => state.warehousesState)

export const warehousesReducer = slice.reducer
