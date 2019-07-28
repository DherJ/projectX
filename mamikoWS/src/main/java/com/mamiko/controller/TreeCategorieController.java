package com.mamiko.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mamiko.bo.CategorieLevel;
import com.mamiko.service.TreeCategorieService;
import com.mamiko.wrapper.TreeCategorieWrapper;

@RestController
@RequestMapping("/tree-categorie")
public class TreeCategorieController {

	@Autowired
	private TreeCategorieService treeCategorieService;

	@CrossOrigin(origins = "*")
    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public TreeCategorieWrapper getAll(@RequestParam(value = "lang", required = false) String language) {
		return this.treeCategorieService.getTreeCategories(language);
	}
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public CategorieLevel getCategorieLevelById(@PathVariable("id") Integer categorieLevelId) {
		return this.treeCategorieService.findById(categorieLevelId);
	}

	@CrossOrigin(origins = "*")
    @PostMapping(value="/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long createCategorieLevel(@RequestBody CategorieLevel categorieLevel) {
		return this.treeCategorieService.save(categorieLevel);
	}
	
	@CrossOrigin(origins = "*")
    @PostMapping(value="/", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long updateCategorieLevel(@RequestBody CategorieLevel categorieLevel) {
		return this.treeCategorieService.update(categorieLevel);
	}
	
	@CrossOrigin(origins = "*")
    @DeleteMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long deleteCategorieLevel(@PathVariable("id") Integer categorieLevelId) {
		return this.treeCategorieService.delete(categorieLevelId);
	}
	
}