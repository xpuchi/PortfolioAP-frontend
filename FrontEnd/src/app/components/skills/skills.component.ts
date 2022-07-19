import { HttpErrorResponse } from '@angular/common/http';
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
}
