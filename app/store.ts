import {
  configureStore,
  ThunkAction,
  Action
} from '@reduxjs/toolkit'
import { AppState, appReducer } from './features'
import thunk from 'redux-thunk'
import { createGQLClient } from './apollo-client'

const apolloMiddleware = thunk.withExtraArgument({ client: createGQLClient() })

export function makeStore() {
  return configureStore({
    reducer: appReducer,
    middleware: defaults => [
      ...defaults({ thunk: { extraArgument: createGQLClient() } }),
      apolloMiddleware,
    ],
  })
}

const store = makeStore()

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
