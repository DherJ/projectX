package com.mamiko.service;

import java.util.List;

import com.mamiko.bo.TypeArticle;

public interface TypeArticleService {

	List<TypeArticle> findAll();
	
	TypeArticle findById( Integer typeArticleId );
	
    Long save( final TypeArticle typeArticle );
    
    Long delete( final Integer typeArticleId );

}
