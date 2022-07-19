package com.portfolioAP.portfolio.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Habilidades implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long id;
    private String Icono;
    private String Habilidad;
    
    public Habilidades(){
    }
    
    public Habilidades(Long id, String Icono, String Habilidad){
        this.id = id;
        this.Icono = Icono;
        this.Habilidad = Habilidad;
}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIcono() {
        return Icono;
    }

    public void setIcono(String icono) {
        this.Icono = icono;
    }

    public String getHabilidad() {
        return Habilidad;
    }

    public void setHabilidad(String habilidad) {
        this.Habilidad = habilidad;
    }

    
    
}
