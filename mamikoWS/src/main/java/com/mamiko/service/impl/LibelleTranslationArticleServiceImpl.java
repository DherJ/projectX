package com.mamiko.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mamiko.bo.Article;
import com.mamiko.bo.LibelleTranslationArticle;
import com.mamiko.constants.ParamConstants;
import com.mamiko.dao.LibelleTranslationArticleMapper;
import com.mamiko.enums.TypeLabeEnum;
import com.mamiko.service.LibelleTranslationArticleService;

/**
 * Implementation class of {@link LibelleTranslationArticleService}.
 *
 * @author jérôme Dhersin
 */
@Service("libelleTranslationArticleService")
@Transactional
public class LibelleTranslationArticleServiceImpl implements LibelleTranslationArticleService {
	
	@Autowired
	private LibelleTranslationArticleMapper libelleTranslationArticleMapper;

	@Override
	public List<LibelleTranslationArticle> findAll() {
		return this.libelleTranslationArticleMapper.findAll();
	}

	@Override
	public LibelleTranslationArticle findById(Integer libelleTranslationArticleId) {
		return this.libelleTranslationArticleMapper.find(libelleTranslationArticleId);
	}
	
	@Override
	public Long save(LibelleTranslationArticle libelleTranslationArticle) {
		return this.libelleTranslationArticleMapper.insert(libelleTranslationArticle);
	}

	@Override
	public Long update(LibelleTranslationArticle libelleTranslationArticle) {
		return this.libelleTranslationArticleMapper.update(libelleTranslationArticle);
	}
	
	@Override
	public Long delete(Integer libelleTranslationArticleId) {
		return this.libelleTranslationArticleMapper.delete(libelleTranslationArticleId);
	}

	@Override
	public void completeLibellesOfArticle(Article article, String codeLangue) {
		if(codeLangue == null) {
			codeLangue = ParamConstants.DEFAULT_LANGUAGE;
		}
		List<LibelleTranslationArticle> libellesTranslationArticle = this.libelleTranslationArticleMapper.findByArticleAndCodeLangue(article.getArticleId(), codeLangue);
		if(libellesTranslationArticle == null || libellesTranslationArticle.size() == 0) {
			libellesTranslationArticle = this.libelleTranslationArticleMapper.findByArticleAndCodeLangue(article.getArticleId(), ParamConstants.DEFAULT_LANGUAGE);
		}
		if(libellesTranslationArticle != null && libellesTranslationArticle.size() > 0) {
			article.setArticleLabel(libellesTranslationArticle.stream().filter(item -> TypeLabeEnum.LABEL.toString().equals(item.getTypeLabel())).findFirst().get().getLabel());
			article.setArticleDescription(libellesTranslationArticle.stream().filter(item -> TypeLabeEnum.DESCRIPTION.toString().equals(item.getTypeLabel())).findFirst().get().getLabel());
		}
	}
}
