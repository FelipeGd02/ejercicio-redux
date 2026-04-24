export type Nota = {
  id: number;
  titulo: string;
  descripcion: string;
};
export type EstadoNotas = {
  misNotas: Nota[];
};