package com.mamiko.wrapper;

import java.util.List;

import com.mamiko.bo.CategorieLevel;

public class TreeCategorieWrapper {

	private List<CategorieLevel> rootCategories;

	public List<CategorieLevel> getRootCategories() {
		return rootCategories;
	}

	public void setRootCategories(List<CategorieLevel> rootCategories) {
		this.rootCategories = rootCategories;
	}

	@Override
	public String toString() {
		return "TreeCategorieWrapper [rootCategories=" + rootCategories + "]";
	}
}
