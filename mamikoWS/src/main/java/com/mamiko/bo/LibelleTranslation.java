package com.mamiko.bo;

public class LibelleTranslation {

	private Integer id;
	private Integer levelId;
	private String codeLangue;
	private String label;
	
	public LibelleTranslation() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getLevelId() {
		return levelId;
	}

	public void setLevelId(Integer levelId) {
		this.levelId = levelId;
	}

	public String getCodeLangue() {
		return codeLangue;
	}

	public void setCodeLangue(String codeLangue) {
		this.codeLangue = codeLangue;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	@Override
	public String toString() {
		return "LibelleTraduction [id=" + id + ", levelId=" + levelId + ", codeLangue=" + codeLangue + ", label="
				+ label + "]";
	}
}
