import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  // public editarEducacion(educacion: Educacion): Observable<Educacion> {
  //   return this.educacionService.editarEducacion(educacion);
  // }

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

  // Modal prueba
  //   public onOpenModal(mode:String, educacion?: Educacion):void(){
  //     const container=document.getElementById('main-container');
  //     const button=document.createElement('button');
  //     button.style.display='none';
  //     button.setAttribute=('data-toggle', 'modal');

  //     if(mode==='add'){
  //       button.setAttribute=('data-target', '#agregarEducacionModal');
  //     } else if(mode==='borrar'){
  //       this.borrarEducacion=educacion;
  //       button.setAttribute=('data-target', '#borrarEducacionModal');
  //     } else if(mode==='editar'){
  //       this.editarEducacion=educacion;
  //       button.setAttribute=('data-target', '#editarEducacionModal');
  //     }

  //     container?.appendChild(button);
  //     button.click();
  //   }

  //   public onAgregarEducacion(educacion: Educacion){
  //     this.editarEducacion=educacion;
  //     document.getElementById('agregar-educacion-form')?.click();
  //     this.EducacionService.agregarEducacion(addForm.value).subscribe({
  //       next: (response: Educacion) => {
  //         console.log(response);
  //         this.getEducacion();
  //         addForm.reset();
  //       },
  //       error:(error.HttpErrorResponse)=> {
  //         alert(error.message);
  //         addForm.reset();
  //       };
  //     });
  //   }

  //   public onEditarEducacion(educacion: Educacion){
  //     this.editarEducacion = educacion;
  //     document.getElementById('editar-educacion-form')?.click();
  //     this.educacionService.editarEducacion(educacion).subscribe({
  //       next: (response:Educacion) => {
  //         console.log(response);
  //         this.getEducacion();
  //         addForm.reset();
  //       },
  //       error:(error.HttpErrorResponse)=> {
  //         alert(error.message);
  //         addForm.reset();
  //       };
  //     })
  //   }

  //   public onBorrarEducacion(id: number):void{
  //     this.educacionService.borrarEducacion(id).subscribe({
  //       next: (response:void) => {
  //         console.log(response);
  //         this.getEducacion();
  //         addForm.reset();
  //       },
  //       error:(error.HttpErrorResponse)=> {
  //         alert(error.message);
  //         addForm.reset();
  //       };
  //     })
  //   }
}
