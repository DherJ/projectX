package com.mamiko.service;

import java.util.List;

import com.mamiko.bo.CategorieLevel;
import com.mamiko.wrapper.TreeCategorieWrapper;

public interface TreeCategorieService {

	List<CategorieLevel> findAll(String codeLangue);
	
	CategorieLevel findById( Integer categorieLevelId );
	
	TreeCategorieWrapper getTreeCategories(String codeLangue);
	
    Long save( final CategorieLevel categorieLevel );
    
    Long update( final CategorieLevel categorieLevel );
    
    Long delete( final Integer categorieLevelId );

}
