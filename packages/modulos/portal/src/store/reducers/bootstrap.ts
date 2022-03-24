import { createSlice } from '@reduxjs/toolkit';

export type BootstrapState = {
  versao: 4 | 5;
}

const initialState: BootstrapState = {
  versao: 5,
}

const slice = createSlice({
  name: "bootstrap",
  initialState,
  reducers: {
    trocarVersaoBootstrap: (state, action) => {
      state.versao = action.payload;
    }
  }
})

export const { trocarVersaoBootstrap } = slice.actions;
export default slice.reducer;
