package com.portfolioAP.portfolio.controller;

import com.portfolioAP.portfolio.model.Persona;
import com.portfolioAP.portfolio.service.PersonaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/persona")
@CrossOrigin(origins = "http://localhost:4200/")
public class PersonaController {
    
    private final PersonaService personaService;
    
    public PersonaController(PersonaService personaService){
        this.personaService = personaService;
    }
    
    @GetMapping("/id/{id}")
    public ResponseEntity<Persona> buscarPersona(@PathVariable("id") Long id){
        Persona persona = (Persona) personaService.buscarPersonaPorId(id);
    return new ResponseEntity<>(persona, HttpStatus.OK);
    }
    
    @PutMapping("/editar")
    public ResponseEntity<Persona> editarPersona(@RequestBody Persona persona){
        Persona editPersona = personaService.editarPersona(persona);
        return new ResponseEntity<>(editPersona, HttpStatus.OK);
    }
  
}    
    
    
    //@GetMapping ("/ver/personas")
    //@ResponseBody
    //public List<Persona> verPersonas() {
    //    return personaService.verPersonas();
    //}
    
    //@Autowired
    //private IPersonaService persoServ;
    

    //@PostMapping ("/new/persona")
    //public void agregarPersona(@RequestBody Persona pers){
    //    persoServ.crearPersona(pers);
    //}
    
    //@DeleteMapping("/delete/id")
    //public void borrarPersona(@PathVariable Long id){
    //    persoServ.borrarPersona(id);
    //}
    
    //@GetMapping ("/traer/personas")
    //public Persona findPersona() {
    //    return persoServ.findPersona((long)1);
    //}

