import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  constructor(private educacionService: EducacionService) {}

  public educaciones: Educacion[] = [];
  public editarEducacion: Educacion | undefined;
  public borrarEducacion: Educacion | undefined;

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe({
      next: (response: Educacion[]) => {
        this.educaciones = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode: String, educacion?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'agregar') {
      button.setAttribute('data-target', '#agregarEducacionModal');
    } else if (mode === 'borrar' && educacion) {
      this.borrarEducacion = educacion;
      button.setAttribute('data-target', '#borrarEducacionModal');
    } else if (mode === 'editar' && educacion) {
      this.editarEducacion = educacion;
      button.setAttribute('data-target', '#editarEducacionModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAgregarEducacion(addForm: NgForm): void {
    this.educacionService.crearEducacion(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.educacionService.getEducacion();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }

  public onEditarEducacion(educacion: Educacion): void {
    this.editarEducacion = educacion;
    this.educacionService.editarEducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.educacionService.getEducacion().subscribe({
          next: (response: Educacion[]) => {
            this.educaciones = response;
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

  public onBorrarEducacion(id: number): void {
    this.educacionService.borrarEducacion(+id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.educacionService.getEducacion().subscribe({
          next: (response: Educacion[]) => {
            this.educaciones = response;
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
