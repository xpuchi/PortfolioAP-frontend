import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/Habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private habilidadesService: HabilidadesService) {}

  public habilidades: Habilidades[] = [];
  public editarHabilidades: Habilidades | undefined;
  public borrarHabilidades: Habilidades | undefined;

  ngOnInit(): void {
    this.habilidadesService.getHabilidades().subscribe({
      next: (response: Habilidades[]) => {
        this.habilidades = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode: String, habilidad?: Habilidades): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'agregar') {
      button.setAttribute('data-target', '#agregarHabilidadesModal');
    } else if (mode === 'borrar' && habilidad) {
      this.borrarHabilidades = habilidad;
      button.setAttribute('data-target', '#borrarHabilidadesModal');
    } else if (mode === 'editar' && habilidad) {
      this.editarHabilidades = habilidad;
      button.setAttribute('data-target', '#editarHabilidadesModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAgregarHabilidades(addForm: NgForm): void {
    this.habilidadesService.crearHabilidad(addForm.value).subscribe({
      next: (response: Habilidades) => {
        console.log(response);
        this.habilidadesService.getHabilidades().subscribe({
          next: (response: Habilidades[]) => {
            this.habilidades = response;
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.message);
          },
        });
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onEditarHabilidades(habilidad: Habilidades): void {
    this.editarHabilidades = habilidad;
    this.habilidadesService.editarHabilidad(habilidad).subscribe({
      next: (response: Habilidades) => {
        console.log(response);
        this.habilidadesService.getHabilidades().subscribe({
          next: (response: Habilidades[]) => {
            this.habilidades = response;
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

  public onBorrarHabilidades(id: number): void {
    this.habilidadesService.borrarHabilidad(+id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.habilidadesService.getHabilidades().subscribe({
          next: (response: Habilidades[]) => {
            this.habilidades = response;
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
