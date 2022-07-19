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
    
    private Long id;
    private String Año;
    private String Titulo;
    private String Subtitulo;
    private String Descripcion;
    
    public Educacion(){
    }

    public Educacion(Long id, String Año, String Titulo, String Subtitulo, String Descripcion) {
        this.id = id;
        this.Año = Año;
        this.Titulo = Titulo;
        this.Subtitulo = Subtitulo;
        this.Descripcion = Descripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAño() {
        return Año;
    }

    public void setAño(String Año) {
        this.Año = Año;
    }

    public String getTitulo() {
        return Titulo;
    }

    public void setTitulo(String Titulo) {
        this.Titulo = Titulo;
    }
    
    public String getSubtitulo() {
        return Subtitulo;
    }
    
    public void setSubtitulo(String Subtitulo) {
        this.Subtitulo = Subtitulo;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }
    
}
