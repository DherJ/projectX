package com.mamiko.bo;

public class TypeArticle {

	private Integer id;
	private String label;
	
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
	
	@Override
	public String toString() {
		return "TypeArticle [id=" + id + ", label=" + label + "]";
	}
	
}
