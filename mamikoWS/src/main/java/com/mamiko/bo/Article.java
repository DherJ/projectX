package com.mamiko.bo;

import java.util.List;

public class Article {

	private Integer articleId;
	private String articleLabel;
	private String articleDescription;
	private Integer articlePriceHT;
	private Integer articlePriceTTC;
	private List<Size> articleSizes;
	private List<Color> articleColors;
	private TypeArticle typeArticle;
	private Integer categorieId;
	
	public Article() {}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public String getArticleLabel() {
		return articleLabel;
	}

	public void setArticleLabel(String articleLabel) {
		this.articleLabel = articleLabel;
	}

	public Integer getArticlePriceHT() {
		return articlePriceHT;
	}

	public void setArticlePriceHT(Integer articlePriceHT) {
		this.articlePriceHT = articlePriceHT;
	}

	public Integer getArticlePriceTTC() {
		return articlePriceTTC;
	}

	public void setArticlePriceTTC(Integer articlePriceTTC) {
		this.articlePriceTTC = articlePriceTTC;
	}

	public String getArticleDescription() {
		return articleDescription;
	}

	public void setArticleDescription(String articleDescription) {
		this.articleDescription = articleDescription;
	}

	public List<Size> getArticleSizes() {
		return articleSizes;
	}

	public void setArticleSizes(List<Size> articleSizes) {
		this.articleSizes = articleSizes;
	}

	public List<Color> getArticleColors() {
		return articleColors;
	}

	public void setArticleColors(List<Color> articleColors) {
		this.articleColors = articleColors;
	}

	public TypeArticle getTypeArticle() {
		return typeArticle;
	}

	public void setTypeArticle(TypeArticle typeArticle) {
		this.typeArticle = typeArticle;
	}

	public Integer getCategorieId() {
		return categorieId;
	}

	public void setCategorieId(Integer categorieId) {
		this.categorieId = categorieId;
	}

	@Override
	public String toString() {
		return "Article [articleId=" + articleId + ", articleLabel=" + articleLabel + ", articleDescription="
				+ articleDescription + ", articlePriceHT=" + articlePriceHT + ", articlePriceTTC=" + articlePriceTTC
				+ ", articleSizes=" + articleSizes + ", articleColors=" + articleColors + ", typeArticle=" + typeArticle
				+ ", categorieId=" + categorieId + "]";
	}
}
