export class Habilidades {
  id?: number;
  icono: string;
  habilidad: string;

  constructor(icono: string, habilidad: string) {
    this.icono = icono;
    this.habilidad = habilidad;
  }
}
