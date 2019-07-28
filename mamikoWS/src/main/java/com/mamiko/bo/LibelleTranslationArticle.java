package com.mamiko.bo;

public class LibelleTranslationArticle {

	private Integer id;
	private Integer articleId;
	private String codeLangue;
	private String label;
	private String typeLabel;
	
	public LibelleTranslationArticle() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
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

	public String getTypeLabel() {
		return typeLabel;
	}

	public void setTypeLabel(String typeLabel) {
		this.typeLabel = typeLabel;
	}

	@Override
	public String toString() {
		return "LibelleTranslationArticle [id=" + id + ", articleId=" + articleId + ", codeLangue=" + codeLangue
				+ ", label=" + label + ", typeLabel=" + typeLabel + "]";
	}
}
