package com.mamiko.criteria;

import java.util.List;

public class ArticleCriteria {

	private Integer id;
	private String label;
	private String codeLangue;
	private Integer priceMin;
	private Integer priceMax;
	private List<String> sizes;
	private List<String> colors;
	
	public ArticleCriteria() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getCodeLangue() {
		return codeLangue;
	}

	public void setCodeLangue(String codeLangue) {
		this.codeLangue = codeLangue;
	}

	public Integer getPriceMin() {
		return priceMin;
	}

	public void setPriceMin(Integer priceMin) {
		this.priceMin = priceMin;
	}

	public Integer getPriceMax() {
		return priceMax;
	}

	public void setPriceMax(Integer priceMax) {
		this.priceMax = priceMax;
	}

	public List<String> getSizes() {
		return sizes;
	}

	public void setSizes(List<String> sizes) {
		this.sizes = sizes;
	}

	public List<String> getColors() {
		return colors;
	}

	public void setColors(List<String> colors) {
		this.colors = colors;
	}

	@Override
	public String toString() {
		return "ArticleCriteria [id=" + id + ", label=" + label + ", codeLangue=" + codeLangue + ", priceMin="
				+ priceMin + ", priceMax=" + priceMax + ", sizes=" + sizes + ", colors=" + colors + "]";
	}

}
