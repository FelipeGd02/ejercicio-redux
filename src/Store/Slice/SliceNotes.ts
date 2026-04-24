import { createSlice } from "@reduxjs/toolkit";
import type { NotasEstado } from "../../types/Notes";

const initialState: NotasEstado = {
  misNotas: [],
};

const sliceNotes = createSlice({
  name: "notas",
  initialState,
  reducers: {
    creteNote: (state, action) => {
      state.misNotas.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.misNotas = state.misNotas.filter(
        (nota) => nota.id !== action.payload
      );
    },
  },
});

export const { creteNote, deleteNote } = sliceNotes.actions;
export default sliceNotes.reducer;