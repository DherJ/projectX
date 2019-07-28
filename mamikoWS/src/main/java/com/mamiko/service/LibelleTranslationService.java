package com.mamiko.service;

import java.util.List;

import com.mamiko.bo.CategorieLevel;
import com.mamiko.bo.LibelleTranslation;

public interface LibelleTranslationService {

	List<LibelleTranslation> findAll();
	
	LibelleTranslation findById( Integer libelleTranslationId );
	
    Long save( final LibelleTranslation libelleTranslation );
    
    Long update( final LibelleTranslation libelleTranslation );
    
    Long delete( final Integer libelleTranslationId );
    
    void completeLibellesOfLevel(CategorieLevel level, String codeLangue);

}
