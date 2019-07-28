package com.mamiko.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mamiko.bo.LibelleTranslation;

public interface LibelleTranslationMapper extends CommonDao<LibelleTranslation, Integer> {
	
	public List<LibelleTranslation> findByLevelAndCodeLangue(@Param("levelId") Integer levelId, @Param("codeLangue") String codeLangue);
}