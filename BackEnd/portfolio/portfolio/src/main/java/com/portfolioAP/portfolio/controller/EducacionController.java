package com.portfolioAP.portfolio.controller;

import com.portfolioAP.portfolio.model.Educacion;
import com.portfolioAP.portfolio.service.EducacionService;
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
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200/")
public class EducacionController {
    
    private final EducacionService educacionService;
    
    public EducacionController(EducacionService educacionService){
        this.educacionService = educacionService;
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Educacion>> buscarEducacion(){
        List<Educacion> educacion = educacionService.buscarEducacion();
    return new ResponseEntity<>(educacion, HttpStatus.OK);
    }
    
    @PutMapping("/editar")
    public ResponseEntity<Educacion> editarEducacion(@RequestBody Educacion educacion){
        Educacion editEducacion = educacionService.editarEducacion(educacion);
        return new ResponseEntity<>(editEducacion, HttpStatus.OK);
    }
    
    @PostMapping("/agregar")
    public ResponseEntity<Educacion> crearEducacion(@RequestBody Educacion educacion){
        Educacion nuevaEducacion = educacionService.crearEducacion(educacion);
        return new ResponseEntity<>(nuevaEducacion, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrarEducacion(@PathVariable("id") Long id){
        educacionService.borrarEducacion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
