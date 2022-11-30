import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TState = { isLoading: boolean }

const initialState: TState = {
  isLoading: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading(state: TState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = loadingSlice.actions

export default loadingSlice.reducer
