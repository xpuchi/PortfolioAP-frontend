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
    
    private Long idHabilidades;
    private String iconoHabilidad;
    private String habilidad;
    
    public Habilidades(){
    }
    
    public Habilidades(Long idHabilidades, String iconoHabilidad, String habilidad){
        this.idHabilidades = idHabilidades;
        this.iconoHabilidad = iconoHabilidad;
        this.habilidad = habilidad;
}

    public Long getIdHabilidades() {
        return idHabilidades;
    }

    public void setIdHabilidades(Long idHabilidades) {
        this.idHabilidades = idHabilidades;
    }

    public String getIconoHabilidad() {
        return iconoHabilidad;
    }

    public void setIconoHabilidad(String iconoHabilidad) {
        this.iconoHabilidad = iconoHabilidad;
    }

    public String getHabilidad() {
        return habilidad;
    }

    public void setHabilidad(String habilidad) {
        this.habilidad = habilidad;
    }

    
    
}
