
package com.portfolioAP.portfolio.service;

import com.portfolioAP.portfolio.model.Habilidades;
import com.portfolioAP.portfolio.repository.HabilidadesRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class HabilidadesService {
    private final HabilidadesRepository habilidadesRepository;


    @Autowired
    public HabilidadesService(HabilidadesRepository habilidadesRepository){
        this.habilidadesRepository = habilidadesRepository;
    }
    
    public Habilidades crearHabilidad(Habilidades habilidades){
        return habilidadesRepository.save(habilidades);
    }
    
    public List<Habilidades> buscarHabilidad(){
        return habilidadesRepository.findAll();
    }
    
    public Habilidades editarHabilidad(Habilidades habilidades){
        return habilidadesRepository.save(habilidades);
    }
    
    public void borrarHabilidad(Long id){
        habilidadesRepository.deleteById(id);
    }
    
}
