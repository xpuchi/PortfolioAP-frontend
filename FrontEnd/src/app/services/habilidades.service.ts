import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../model/Habilidades';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getHabilidades(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(`${this.apiServerUrl}/habilidades/all`);
  }

  public crearHabilidad(habilidades: Habilidades): Observable<Habilidades> {
    return this.http.post<Habilidades>(
      `${this.apiServerUrl}/habilidades/agregar`,
      habilidades
    );
  }

  public editarHabilidad(habilidades: Habilidades): Observable<Habilidades> {
    return this.http.put<Habilidades>(
      `${this.apiServerUrl}/habilidades/editar`,
      habilidades
    );
  }

  public borrarHabilidad(habilidadesId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/habilidades/borrar/${habilidadesId}`
    );
  }
}
