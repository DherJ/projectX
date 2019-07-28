package com.mamiko.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mamiko.bo.Article;
import com.mamiko.criteria.ArticleCriteria;

public interface ArticleMapper extends CommonDao<Article, Integer> {

	List<Article> findAllByCategorie(@Param("lang") String lang, @Param("categorieId") Integer categorieId);

	List<Article> findAllByCriteria(@Param("criteria") ArticleCriteria criteria);
}
