import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearNota } from "../Store/Slice/SliceNotes";

export const NotesPages = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  const dispatch = useDispatch();

  const handleAgregar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!titulo || !descripcion) return;
    dispatch(crearNota({ id: Date.now(), titulo, descripcion }));
    setTitulo("");
    setDescripcion("");
  };

  return (
    <form className="notes-form">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button className="btn-add" onClick={handleAgregar}>
        Agregar nota
      </button>
    </form>
  );
};