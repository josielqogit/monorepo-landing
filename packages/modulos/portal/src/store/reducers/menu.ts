import { createSlice } from '@reduxjs/toolkit';

export type menuState = {
  estaAberto: boolean;
  moduloSelecionado: "administracao" | "tributario";
  versaoBootstrap: 4 | 5;
}

const initialState: menuState = {
  // se for true qd monta a tela renderiza fechado
  // por causa do useEffect que controla a abertura
  estaAberto: false,
  moduloSelecionado: "administracao",
  versaoBootstrap: 5,
}

const slice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenu: (state, action) => {
      state.estaAberto = action.payload;
    },
    selecionarModulo: (state, action) => {
      state.moduloSelecionado = action.payload;
    },
    trocarVersaoBootstrap: (state, action) => {
      state.versaoBootstrap = action.payload;
    }
  }
})

export const { handleMenu, selecionarModulo, trocarVersaoBootstrap } = slice.actions;
export default slice.reducer;
