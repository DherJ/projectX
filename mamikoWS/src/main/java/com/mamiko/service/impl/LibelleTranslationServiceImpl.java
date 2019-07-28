package com.mamiko.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mamiko.bo.CategorieLevel;
import com.mamiko.bo.LibelleTranslation;
import com.mamiko.constants.ParamConstants;
import com.mamiko.dao.LibelleTranslationMapper;
import com.mamiko.service.LibelleTranslationService;

/**
 * Implementation class of {@link LibelleTranslationService}.
 *
 * @author jérôme Dhersin
 */
@Service("libelleTranslationService")
@Transactional
public class LibelleTranslationServiceImpl implements LibelleTranslationService {
	
	@Autowired
	private LibelleTranslationMapper libelleTranslationMapper;

	@Override
	public List<LibelleTranslation> findAll() {
		return this.libelleTranslationMapper.findAll();
	}

	@Override
	public LibelleTranslation findById(Integer libelleTranslationId) {
		return this.libelleTranslationMapper.find(libelleTranslationId);
	}
	
	@Override
	public Long save(LibelleTranslation libelleTranslation) {
		return this.libelleTranslationMapper.insert(libelleTranslation);
	}

	@Override
	public Long update(LibelleTranslation libelleTranslation) {
		return this.libelleTranslationMapper.update(libelleTranslation);
	}
	
	@Override
	public Long delete(Integer libelleTranslationId) {
		return this.libelleTranslationMapper.delete(libelleTranslationId);
	}

	@Override
	public void completeLibellesOfLevel(CategorieLevel level, String codeLangue) {
		List<LibelleTranslation> libellesTranslation = libelleTranslationMapper.findByLevelAndCodeLangue(level.getLevelId(), codeLangue);
		if(libellesTranslation == null) {
			libellesTranslation = this.libelleTranslationMapper.findByLevelAndCodeLangue(level.getLevelId(), ParamConstants.DEFAULT_LANGUAGE);
		}
		if(libellesTranslation != null) {
			level.setLibelles(libellesTranslation.stream().collect(HashMap<String, LibelleTranslation>::new, 
                    (m, c) -> m.put(c.getCodeLangue(), c),
                    (m, u) -> {}));
		}
	}
}
