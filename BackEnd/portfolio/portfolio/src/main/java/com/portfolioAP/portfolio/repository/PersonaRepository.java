package com.portfolioAP.portfolio.repository;

import com.portfolioAP.portfolio.model.Persona;
import java.io.Serializable;
import javax.persistence.metamodel.SingularAttribute;
import org.springframework.data.jpa.domain.AbstractPersistable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonaRepository extends JpaRepository <Persona, Long>{

    public Object findById(SingularAttribute<AbstractPersistable, Serializable> id);
    
}
