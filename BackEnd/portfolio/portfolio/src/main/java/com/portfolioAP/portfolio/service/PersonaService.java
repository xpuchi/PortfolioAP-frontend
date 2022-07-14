package com.portfolioAP.portfolio.service;

import com.portfolioAP.portfolio.exception.PersonaNoEncontrada;
import com.portfolioAP.portfolio.model.Persona;
import com.portfolioAP.portfolio.repository.PersonaRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PersonaService {
    private final PersonaRepository personaRepository;
    
    @Autowired
    public PersonaService(PersonaRepository personaRepository){
        this.personaRepository = personaRepository;
    }
    
    public Persona crearPersona(Persona persona){
        return personaRepository.save(persona);
    }
    
    public List<Persona> buscarPersona(){
        return personaRepository.findAll();
    }
    
    public Persona buscarPersonaPorId(Long id){
        return personaRepository.findById(id).orElseThrow(()->new PersonaNoEncontrada("persona no encontrada"));
    }
    
    public Persona editarPersona(Persona persona){
        return personaRepository.save(persona);
    }
    
    public void borrarPersona(Long id){
        personaRepository.deleteById(id);
    }
}

//@Service
//public class PersonaService implements IPersonaService {
    
//    @Autowired
//    public PersonaRepository persoRepo;

//    @Override
//    public List<Persona> verPersonas() {
//        return persoRepo.findAll();
//    }

//    @Override
//    public void crearPersona(Persona per) {
//        persoRepo.save(per);
//    }

//    @Override
//    public void borrarPersona(Long id) {
//        persoRepo.deleteById(id);
//    }

//    @Override
//    public Persona buscarPersona(Long id) {
//        return persoRepo.findById(id).orElse(null);
//    }

//    @Override
//    public Persona findPersona(long l) {
//        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
//    }
    
    
    
//}
