import { gql } from '@apollo/client'
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { AppState } from '..'
import { GraphQLClient } from '../../apollo-client'

const adapter = createEntityAdapter<Link>()
const initialState = adapter.getInitialState()

export const linkThunks = {
  list: createAsyncThunk('links/list', async (_, thunkAPI): Promise<Link[]> => {
    return (thunkAPI.extra as GraphQLClient).query(
      'links',
      gql`
        query getLinks {
          links {
            id
            title
            description
            url
          }
        }
      `
    )
  }),
}

const slice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(linkThunks.list.fulfilled, adapter.setAll),
})

export const { selectAll: selectLinks, selectById: selectLinkById } =
  adapter.getSelectors((state: AppState) => state.linksState)

export const linksReducer = slice.reducer
