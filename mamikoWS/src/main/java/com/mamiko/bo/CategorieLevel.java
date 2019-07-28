package com.mamiko.bo;

import java.util.List;
import java.util.Map;

public class CategorieLevel {

	private Integer levelId;
	private Integer levelNum;
	private Integer levelParentNum;
	private Integer levelParentId;
	private String levelLabel;
	
	private Map<String, LibelleTranslation> libelles;
	
	private List<CategorieLevel> childrens;
	
	public CategorieLevel() {}

	public Integer getLevelId() {
		return levelId;
	}

	public void setLevelId(Integer levelId) {
		this.levelId = levelId;
	}

	public Integer getLevelNum() {
		return levelNum;
	}

	public void setLevelNum(Integer levelNum) {
		this.levelNum = levelNum;
	}

	public Integer getLevelParentNum() {
		return levelParentNum;
	}

	public void setLevelParentNum(Integer levelParentNum) {
		this.levelParentNum = levelParentNum;
	}

	public Integer getLevelParentId() {
		return levelParentId;
	}

	public void setLevelParentId(Integer levelParentId) {
		this.levelParentId = levelParentId;
	}

	public String getLevelLabel() {
		return levelLabel;
	}

	public void setLevelLabel(String levelLabel) {
		this.levelLabel = levelLabel;
	}

	public Map<String, LibelleTranslation> getLibelles() {
		return libelles;
	}

	public void setLibelles(Map<String, LibelleTranslation> libelles) {
		this.libelles = libelles;
	}

	
	public List<CategorieLevel> getChildrens() {
		return childrens;
	}

	public void setChildrens(List<CategorieLevel> childrens) {
		this.childrens = childrens;
	}

	@Override
	public String toString() {
		return "CategorieLevel [levelId=" + levelId + ", levelNum=" + levelNum + ", levelParentNum=" + levelParentNum
				+ ", levelParentId=" + levelParentId + ", levelLabel=" + levelLabel + ", libelles=" + libelles + "]";
	}

}
