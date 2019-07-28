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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mamiko.bo.Article;
import com.mamiko.criteria.ArticleCriteria;
import com.mamiko.service.ArticleService;


@RestController
@RequestMapping("/articles")
public class ArticleController {

	@Autowired
	private ArticleService articleService;

	@CrossOrigin(origins = "*")
    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public List<Article> getAll(@RequestParam(value = "lang", required = false) String language) {
		return this.articleService.findAll(language);
	}
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Article getArticleById(@PathVariable("id") Integer articleId, @RequestParam(value = "lang", required = false) String language) {
		return this.articleService.findById(language, articleId);
	}

	@CrossOrigin(origins = "*")
    @GetMapping(value="/categorie/{idCategorie}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Article> findAllByCategorie(@PathVariable("idCategorie") Integer categorieId, @RequestParam(value = "lang", required = false) String language) {
        return this.articleService.findAllByCategorie(language, categorieId);
    }
	
	@CrossOrigin(origins = "*")
    @GetMapping(value="/search", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Article> findAllByCriteria(@RequestBody ArticleCriteria criteria, @RequestParam(value = "lang", required = false) String language) {
        return this.articleService.findAllByCriteria(language, criteria);
    }
	
	@CrossOrigin(origins = "*")
    @PostMapping(value="/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long createArticle(@RequestBody Article article) {
		return this.articleService.save(article);
	}
	
	@CrossOrigin(origins = "*")
    @PostMapping(value="/", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long updateArticle(@RequestBody Article article) {
		return this.articleService.update(article);
	}
	
	@CrossOrigin(origins = "*")
    @DeleteMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public Long deleteArticle(@PathVariable("id") Integer articleId) {
		return this.articleService.delete(articleId);
	}
	
}