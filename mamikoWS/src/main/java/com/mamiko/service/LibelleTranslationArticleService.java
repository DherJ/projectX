package com.mamiko.service;

import java.util.List;

import com.mamiko.bo.Article;
import com.mamiko.bo.LibelleTranslationArticle;

public interface LibelleTranslationArticleService {

	List<LibelleTranslationArticle> findAll();
	
	LibelleTranslationArticle findById( Integer libelleTranslationId );
	
    Long save( final LibelleTranslationArticle libelleTranslationArticle );
    
    Long update( final LibelleTranslationArticle libelleTranslationArticle );
    
    Long delete( final Integer libelleTranslationArticleId );
    
    void completeLibellesOfArticle(Article article, String codeLangue);

}
