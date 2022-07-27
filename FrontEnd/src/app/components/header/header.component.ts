import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private personaService: PersonaService) {}

  public persona: Persona = {
    nombre: '',
    apellido: '',
    descripcion: '',
    ubicacion: '',
  };

  public editarPersona: Persona | undefined;
  public borrarPersona: Persona | undefined;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode: String, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'editar') {
      this.editarPersona = persona;
      button.setAttribute('data-target', '#editarPersonaModal');
    } else if (mode === 'borrar') {
      this.borrarPersona = persona;
      button.setAttribute('data-target', '#borrarPersonaModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onEditarPersona(persona: Persona): void {
    this.editarPersona = persona;
    this.personaService.editarPersona(persona).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.personaService.getPersona().subscribe({
          next: (response: Persona) => {
            this.persona = response;
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.message);
          },
        });
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onBorrarPersona(id: string): void {
    this.personaService.borrarPersona(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.personaService.getPersona().subscribe({
          next: (response: Persona) => {
            this.persona = response;
          },
          error: (error: HttpErrorResponse) => {
            alert(error.message);
          },
        });
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
