import { createSlice } from "@reduxjs/toolkit";
import type { EstadoNotas } from "../../types/Notes";

const initialState: EstadoNotas = {
  misNotas: [],
};

const sliceNotas = createSlice({
  name: "notas",
  initialState,
  reducers: {
    crearNota: (state, action) => {
      state.misNotas.push(action.payload);
    },
    borrarNota: (state, action) => {
      state.misNotas = state.misNotas.filter(
        (nota) => nota.id !== action.payload
      );
    },
  },
});

export const { crearNota, borrarNota } = sliceNotas.actions;
export default sliceNotas.reducer;