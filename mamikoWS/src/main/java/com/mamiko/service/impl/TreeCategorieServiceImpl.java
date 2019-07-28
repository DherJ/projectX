package com.mamiko.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mamiko.bo.CategorieLevel;
import com.mamiko.dao.CategorieLevelMapper;
import com.mamiko.service.LibelleTranslationService;
import com.mamiko.service.TreeCategorieService;
import com.mamiko.wrapper.TreeCategorieWrapper;

/**
 * Implementation class of {@link TreeCategorieService}.
 *
 * @author jérôme Dhersin
 */
@Service("treeCategorieService")
@Transactional
public class TreeCategorieServiceImpl implements TreeCategorieService {
	
	@Autowired
	private LibelleTranslationService libelleTranslationService;
	
	@Autowired
	private CategorieLevelMapper categorieLevelMapper;

	@Override
	public List<CategorieLevel> findAll(String codeLangue) {
		List<CategorieLevel> levels = categorieLevelMapper.findAll();
		levels.stream().forEach(item -> {
			libelleTranslationService.completeLibellesOfLevel(item, codeLangue);
		});
		return levels;
	}

	@Override
	public CategorieLevel findById(Integer categorieLevelId) {
		return categorieLevelMapper.find(categorieLevelId);
	}

	@Override
	public Long save(CategorieLevel categorieLevel) {
		return categorieLevelMapper.insert(categorieLevel);
	}

	@Override
	public Long update(CategorieLevel categorieLevel) {
		return categorieLevelMapper.update(categorieLevel);
	}

	@Override
	public Long delete(Integer categorieLevelId) {
		return categorieLevelMapper.delete(categorieLevelId);
	}

	@Override
	public TreeCategorieWrapper getTreeCategories(String codeLangue) {
		TreeCategorieWrapper treeCategorieWrapper = new TreeCategorieWrapper();
		List<CategorieLevel> categoriesLevel = this.findAll(codeLangue);
		if(categoriesLevel == null) {
			return null;
		}
		List<CategorieLevel> rootCategoriesLevel = categoriesLevel.stream().filter(item -> item.getLevelNum().equals(1)).collect(Collectors.toList());
		rootCategoriesLevel.stream().forEach(item -> {
			this.completeChildrensOfNode(item, categoriesLevel);
		});
		treeCategorieWrapper.setRootCategories(rootCategoriesLevel);
		return treeCategorieWrapper;
	}
	
	/**
	 * Retrieve all childrens for node
	 * @param node : CategorieLevel -> Node to complete the childrens
	 * @param categoriesLevel : List<CategorieLevel> -> the list of all CategorieLevel
	 */
	private void completeChildrensOfNode(CategorieLevel node, List<CategorieLevel> categoriesLevel) {
		if(node == null || categoriesLevel == null) {
			return;
		}
		List<CategorieLevel> childrensNode = categoriesLevel.stream().filter(item -> node.getLevelId().equals(item.getLevelParentId())).collect(Collectors.toList());
		node.setChildrens(childrensNode);
		childrensNode.forEach(item -> {
			this.completeChildrensOfNode(item, categoriesLevel);
		});
	}

}
