package com.portfolioAP.portfolio.controller;

import com.portfolioAP.portfolio.model.Habilidades;
import com.portfolioAP.portfolio.service.HabilidadesService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/habilidades")
@CrossOrigin(origins = "http://localhost:4200/")
public class HabilidadesController {
    
      private final HabilidadesService habilidadesService;
    
    public HabilidadesController(HabilidadesService habilidadesService){
        this.habilidadesService = habilidadesService;
    }
    
    
    @GetMapping("/all")
    public ResponseEntity<List<Habilidades>> buscarHabilidad(){
        List<Habilidades> habilidades = habilidadesService.buscarHabilidad();
    return new ResponseEntity<>(habilidades, HttpStatus.OK);
    }
    
    @PutMapping("/editar")
    public ResponseEntity<Habilidades> editarHabilidad(@RequestBody Habilidades habilidades){
        Habilidades editHabilidad = habilidadesService.editarHabilidad(habilidades);
        return new ResponseEntity<>(editHabilidad, HttpStatus.OK);
    }
    
    @PostMapping("/agregar")
    public ResponseEntity<Habilidades> crearHabilidad(@RequestBody Habilidades habilidades){
        Habilidades nuevaHabilidad = habilidadesService.crearHabilidad(habilidades);
        return new ResponseEntity<>(nuevaHabilidad, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrarHabilidad(@PathVariable("id") Long id){
        habilidadesService.borrarHabilidad(id);
        return new ResponseEntity<>(HttpStatus.OK);
    } 
    
}
