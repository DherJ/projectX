package com.mamiko.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mamiko.bo.TypeArticle;
import com.mamiko.service.TypeArticleService;

@RestController
@RequestMapping("/type-articles")
public class TypeArticleController {

	@Autowired
	private TypeArticleService typeArticleService;

	@CrossOrigin(origins = "*")
    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public List<TypeArticle> getAll() {
		return this.typeArticleService.findAll();
	}
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public TypeArticle getTypeArticleById(@PathVariable("id") Integer typeArticleId) {
		return this.typeArticleService.findById(typeArticleId);
	}

	@CrossOrigin(origins = "*")
    @PostMapping(value="/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long createTypeArticle(@RequestBody TypeArticle typeArticle) {
		return this.typeArticleService.save(typeArticle);
	}
	
	@CrossOrigin(origins = "*")
    @DeleteMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long deleteTypeArticle(@PathVariable("id") Integer typeArticleId) {
		return this.typeArticleService.delete(typeArticleId);
	}
	
}