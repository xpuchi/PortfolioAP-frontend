export class Educacion {
  id: number;
  año: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;

  constructor(
    id: number,
    año: string,
    titulo: string,
    subtitulo: string,
    descripcion: string
  ) {
    this.id = id;
    this.año = año;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.descripcion = descripcion;
  }
}
