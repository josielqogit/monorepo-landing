import { createSlice } from '@reduxjs/toolkit';

export type LoadingState = {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false
}

const slice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  }
})

export const { handleLoading } = slice.actions;
export default slice.reducer;
