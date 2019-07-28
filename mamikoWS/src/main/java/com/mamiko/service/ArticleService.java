package com.mamiko.service;

import java.util.List;

import com.mamiko.bo.Article;
import com.mamiko.criteria.ArticleCriteria;

public interface ArticleService {

	List<Article> findAll(String lang);
	
	List<Article> findAllByCategorie(String lang, Integer categorieId);
	
	List<Article> findAllByCriteria(String lang, ArticleCriteria criteria);
	
	Article findById( String lang, Integer articleId );
	
    Long save( final Article article );
    
    Long update( final Article article );
    
    Long delete( final Integer articleId );

}
