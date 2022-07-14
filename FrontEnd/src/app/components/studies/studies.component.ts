import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent {
  //   miPortfolio: Educacion = {
  //     año: '',
  //     titulo: '',
  //     descripcion: '',
  //   };
  //   public educaciones: Educacion[] = [];
  //   constructor(private educacionService: EducacionService) {}
  //   ngOnInit(): void {
  //     this.getEducaciones();
  //   }
  //   public getEducaciones(): void {
  //     this.educacionService.getEducacion().subscribe({
  //       next: (Response: Educacion[]) => {
  //         this.educaciones = Response;
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       },
  //     });
  //   }
}
