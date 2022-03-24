import { createSlice } from '@reduxjs/toolkit';

export interface UsuarioState {
  nome: string;
  sobrenome: string;
}

const initialState: UsuarioState = {
  nome: "NomeRedux",
  sobrenome: "SobrenomeRedux",
}

const slice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.nome = action.payload;
    },
  }
})

export const { changeName } = slice.actions;
export default slice.reducer;
