export class Persona {
  id?: number;
  nombre: String;
  apellido: String;
  descripcion: String;
  ubicacion: String;

  constructor(
    nombre: String,
    apellido: String,
    descripcion: String,
    ubicacion: String
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = descripcion;
    this.ubicacion = ubicacion;
  }
}
