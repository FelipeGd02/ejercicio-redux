import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../Store/Slice/SliceNotes";
import type { RootState } from "../types/StoreTypes";

export const NotesDashboard = () => {
  const dispatch = useDispatch();
  const notas = useSelector((state: RootState) => state.reducerNotas.misNotas);
  const total = notas.length;
  const ultima = notas[notas.length - 1];

  return (
    <>
      <nav className="dashboard-stats">
        <div className="stat-card">
          <p className="stat-card__label">Total de notas</p>
          <p className="stat-card__value">{total}</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Última nota</p>
          <p className="stat-card__value">{ultima ? ultima.titulo : "—"}</p>
        </div>
      </nav>

      <section className="notes-section">
        <p className="notes-section__heading">Mis notas</p>

        {notas.length === 0 ? (
          <div className="notes-empty">
            <strong>Sin notas todavía</strong>
            Agrega tu primera nota arriba
          </div>
        ) : (
          notas.map((nota) => (
            <div key={nota.id} className="note-card">
              <div className="note-card__body">
                <h2 className="note-card__title">{nota.titulo}</h2>
                <p className="note-card__desc">{nota.descripcion}</p>
              </div>
              <button
                className="btn-delete"
                onClick={() => dispatch(deleteNote(nota.id))}
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );
};