export type Notas = {
  id: number;
  titulo: string;
  descripcion: string;
};
export type NotasEstado = {
  misNotas: Notas[];
};