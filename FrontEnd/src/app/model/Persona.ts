export class Persona {
  id?: string;
  nombre: string;
  apellido: string;
  descripcion: string;
  ubicacion: string;

  constructor(
    nombre: string,
    apellido: string,
    descripcion: string,
    ubicacion: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = descripcion;
    this.ubicacion = ubicacion;
  }
}
