import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from 'store/root-reducer'

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type TState = ReturnType<typeof rootReducer>
