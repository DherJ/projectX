package com.mamiko.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mamiko.bo.Article;
import com.mamiko.constants.ParamConstants;
import com.mamiko.criteria.ArticleCriteria;
import com.mamiko.dao.ArticleMapper;
import com.mamiko.service.ArticleService;
import com.mamiko.service.LibelleTranslationArticleService;

/**
 * Implementation class of {@link ArticleService}.
 *
 * @author jérôme Dhersin
 */
@Service("articleService")
@Transactional
public class ArticleServiceImpl implements ArticleService {
	
	@Autowired
	private ArticleMapper articleMapper;

	@Autowired
	private LibelleTranslationArticleService libelleTranslationArticleService;
	
	@Override
	public List<Article> findAll(String codeLangue) {
		List<Article> articles = this.articleMapper.findAll();
		if(articles != null && articles.size() > 0) {
			articles.stream().forEach(item -> {
				libelleTranslationArticleService.completeLibellesOfArticle(item, codeLangue);
			});
		}
		return articles;
	}

	@Override
	public List<Article> findAllByCategorie(String codeLangue, Integer categorieId) {
		//List<Article> articles = this.articleMapper.findAllByCategorie(codeLangue, categorieId);
//		if(articles != null && articles.size() > 0) {
//			articles.stream().forEach(item -> {
//				libelleTranslationArticleService.completeLibellesOfArticle(item, codeLangue);
//			});
//		}
		return this.articleMapper.findAllByCategorie(codeLangue, categorieId);
	}
	
	@Override
	public List<Article> findAllByCriteria(String codeLangue, ArticleCriteria criteria) {
		if(criteria != null && criteria.getCodeLangue() == null) {
			criteria.setCodeLangue(ParamConstants.DEFAULT_LANGUAGE);
		}
		return this.articleMapper.findAllByCriteria(criteria);
	}
	
	@Override
	public Article findById(String codeLangue, Integer articleId) {
		Article article =  this.articleMapper.find(articleId);
		if(article != null) {
			libelleTranslationArticleService.completeLibellesOfArticle(article, codeLangue);
		}
		return article;
	}
	
	@Override
	public Long save(Article article) {
		return this.articleMapper.insert(article);
	}

	@Override
	public Long update(Article article) {
		return this.articleMapper.update(article);
	}

	@Override
	public Long delete(Integer articleId) {
		return this.articleMapper.delete(articleId);
	}
}
