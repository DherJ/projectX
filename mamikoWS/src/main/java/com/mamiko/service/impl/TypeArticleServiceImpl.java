package com.mamiko.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mamiko.bo.TypeArticle;
import com.mamiko.dao.TypeArticleMapper;
import com.mamiko.service.TypeArticleService;

/**
 * Implementation class of {@link TypeArticleService}.
 *
 * @author jérôme Dhersin
 */
@Service("typeArticleService")
@Transactional
public class TypeArticleServiceImpl implements TypeArticleService {
	
	@Autowired
	private TypeArticleMapper typeArticleMapper;

	@Override
	public List<TypeArticle> findAll() {
		return this.typeArticleMapper.findAll();
	}

	@Override
	public TypeArticle findById(Integer typeArticleId) {
		return this.typeArticleMapper.find(typeArticleId);
	}
	
	@Override
	public Long save(TypeArticle typeArticle) {
		return this.typeArticleMapper.insert(typeArticle);
	}

	@Override
	public Long delete(Integer typeArticleId) {
		return this.typeArticleMapper.delete(typeArticleId);
	}

}
