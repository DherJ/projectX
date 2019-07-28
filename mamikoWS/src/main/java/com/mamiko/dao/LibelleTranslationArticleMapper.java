package com.mamiko.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mamiko.bo.LibelleTranslationArticle;

public interface LibelleTranslationArticleMapper extends CommonDao<LibelleTranslationArticle, Integer> {
	
	public List<LibelleTranslationArticle> findByArticleAndCodeLangue(@Param("articleId") Integer articlelId, @Param("codeLangue") String codeLangue);
	
}