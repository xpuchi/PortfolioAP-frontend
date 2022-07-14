package com.portfolioAP.portfolio.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Educacion implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long idEducacion;
    private int añoEducacion;
    private String tituloEducacion;
    private String descripcionEducacion;
    
    public Educacion(){
    }

    public Educacion(Long idEducacion, int añoEducacion, String tituloEducacion, String descripcionEducacion) {
        this.idEducacion = idEducacion;
        this.añoEducacion = añoEducacion;
        this.tituloEducacion = tituloEducacion;
        this.descripcionEducacion = descripcionEducacion;
    }

    public Long getIdEducacion() {
        return idEducacion;
    }

    public void setIdEducacion(Long idEducacion) {
        this.idEducacion = idEducacion;
    }

    public int getAñoEducacion() {
        return añoEducacion;
    }

    public void setAñoEducacion(int añoEducacion) {
        this.añoEducacion = añoEducacion;
    }

    public String getTituloEducacion() {
        return tituloEducacion;
    }

    public void setTituloEducacion(String tituloEducacion) {
        this.tituloEducacion = tituloEducacion;
    }

    public String getDescripcionEducacion() {
        return descripcionEducacion;
    }

    public void setDescripcionEducacion(String descripcionEducacion) {
        this.descripcionEducacion = descripcionEducacion;
    }
    
    
    
}
    
