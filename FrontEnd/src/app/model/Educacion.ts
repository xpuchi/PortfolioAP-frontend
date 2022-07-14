export class Educacion {
  id?: number;
  año: String;
  titulo: String;
  descripcion: String;

  constructor(año: String, titulo: String, descripcion: String) {
    this.año = año;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
