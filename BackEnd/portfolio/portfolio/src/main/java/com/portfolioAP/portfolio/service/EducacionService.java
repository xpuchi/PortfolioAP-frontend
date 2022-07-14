package com.portfolioAP.portfolio.service;

import com.portfolioAP.portfolio.model.Educacion;
import com.portfolioAP.portfolio.repository.EducacionRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EducacionService {
    private final EducacionRepository educacionRepository;


    @Autowired
    public EducacionService(EducacionRepository educacionRepository){
        this.educacionRepository = educacionRepository;
    }
    
    public Educacion crearEducacion(Educacion educacion){
        return educacionRepository.save(educacion);
    }
    
    public List<Educacion> buscarEducacion(){
        return educacionRepository.findAll();
    }
    
    public Educacion editarEducacion(Educacion educacion){
        return educacionRepository.save(educacion);
    }
    
    public void borrarEducacion(Long id){
        educacionRepository.deleteById(id);
    }
    
}
